#!/usr/bin/env python3
"""Сверка публикаций ВКонтакте с планом — и прогрев превью, когда он доступен.

Главное здесь — режим --check. Он берёт очередь автопостинга и смотрит стену
сообщества: что из запланированного действительно вышло, с картинкой ли и
куда ведёт ссылка. Три исхода, и различать их обязательно:

    ✅ запись со ссылкой и картинкой — то, ради чего всё делалось;
    🔸 статьёй ВК — обложка есть, но ссылка ведёт внутрь ВК, трафика нет;
    ❌ импорт пропустил — записи не появилось вовсе.

Почему это понадобилось. Сначала о судьбе постов судили по журналу маячка, и
судили неверно: отсутствие сборщика превью читали как «вышло без картинки», а
на деле запись не создавалась. Стену открыл сервисный ключ приложения —
групповому токену wall.get отвечает ошибкой 27.

Прогрев (без --check) просит ВК перечитать страницу заранее, методом
pages.clearCache: страницы разборов лежат на сайте задолго до выхода поста.
Документация обещает, что метод работает с сервисным ключом, но ВК отвечает
1051 — метод требует профиль пользователя, не приложения. До появления
пользовательского токена режим прогрева бесполезен.

    python3 tool/warm_vk_preview.py --check          # сверка за неделю
    python3 tool/warm_vk_preview.py --check --days 30
    python3 tool/warm_vk_preview.py --ahead 14       # прогрев, когда заработает

Ключ берётся из VK_SERVICE_KEY или из ~/.vk_service_key.
"""
import argparse
import glob
import json
import os
import re
import subprocess
import sys
import time
from datetime import datetime, timedelta, timezone

SITE = "https://gosvyplaty.ru"
API = "https://api.vk.com/method/pages.clearCache"
API_WALL = "https://api.vk.com/method/wall.get"
GROUP_ID = 238682278
LOG = "https://vk-image-probe.niktethys.workers.dev/log"
HERE = os.path.dirname(os.path.abspath(__file__))
QUEUE = os.path.expanduser("~/Downloads/vyplaty/vyplaty_bot/content/queue")
QUEUE_TIMES = os.path.join(HERE, "queue_times.json")
DOCS = os.path.join(HERE, "..", "docs")
# Пояс сервера бота: время в манифестах и в базе записано без смещения.
QUEUE_TZ = timezone(timedelta(hours=5))


def fetch(url, data=None, timeout=60):
    """Запрос через curl.

    Не urllib: у системного питона на этой машине нет корневых сертификатов,
    и любой https падает на проверке. Тем же способом ходит update_feed.sh.
    """
    cmd = ["curl", "-s", "--max-time", str(timeout), url]
    for key, value in (data or {}).items():
        cmd += ["--data-urlencode", f"{key}={value}"]
    out = subprocess.run(cmd, capture_output=True, text=True)
    if out.returncode != 0:
        raise RuntimeError(out.stderr.strip() or f"curl вернул {out.returncode}")
    return out.stdout


def service_key():
    """Ключ из окружения или из файла рядом с домашней папкой.

    В .env бота его держать незачем: прогрев запускается с рабочей машины,
    вместе с выкаткой ленты, а не на сервере.
    """
    key = os.environ.get("VK_SERVICE_KEY", "").strip()
    if key:
        return key
    path = os.path.expanduser("~/.vk_service_key")
    try:
        with open(path, encoding="utf-8") as f:
            return f.read().strip()
    except OSError:
        sys.exit(
            "Нет сервисного ключа. Возьми его в кабинете id.vk.ru → Мои "
            "приложения → 54730499 → Сервисный ключ доступа, затем:\n"
            "    echo '<ключ>' > ~/.vk_service_key && chmod 600 ~/.vk_service_key"
        )


def planned():
    """slug → время публикации. Время из базы точнее даты в манифесте."""
    dates = {}
    try:
        with open(QUEUE_TIMES, encoding="utf-8") as f:
            for slug, when in json.load(f).items():
                try:
                    dates[slug] = datetime.fromisoformat(str(when))
                except ValueError:
                    pass
    except (OSError, ValueError):
        pass

    for dirpath, _, files in os.walk(QUEUE):
        for name in files:
            if not name.startswith("manifest") or not name.endswith(".json"):
                continue
            try:
                with open(os.path.join(dirpath, name), encoding="utf-8") as f:
                    data = json.load(f)
            except (OSError, ValueError):
                continue
            for row in (data if isinstance(data, list) else [data]):
                slug, when = row.get("slug"), row.get("scheduled_at")
                if not slug or not when or slug in dates:
                    continue
                try:
                    dates[slug] = datetime.fromisoformat(str(when))
                except ValueError:
                    pass

    out = {}
    for slug, when in dates.items():
        out[slug] = when.replace(tzinfo=QUEUE_TZ) if when.tzinfo is None else when
    return out


def upcoming(limit):
    """Ближайшие невышедшие посты, от самого скорого."""
    now = datetime.now(timezone.utc)
    future = [(w, s) for s, w in planned().items() if w > now]
    return [s for _, s in sorted(future)[:limit]]


def warm(slug, key):
    """Попросить ВК перечитать страницу. Возвращает текст итога."""
    try:
        answer = json.loads(fetch(API, {
            "url": f"{SITE}/post/{slug}",
            "access_token": key,
            "v": "5.199",
        }, timeout=30))
    except Exception as e:                                  # сеть, таймаут
        return f"не дозвонился: {e}"
    if answer.get("response") == 1:
        return "кэш сброшен, ВК пойдёт за страницей"
    err = answer.get("error", {})
    code = err.get("error_code")
    if code == 27:
        return ("ключ не сервисный, а групповой — нужен именно сервисный "
                "ключ приложения из кабинета id.vk.ru")
    if code == 5:
        return "ключ не принят: проверь, что скопирован целиком"
    return f"отказ {code}: {err.get('error_msg', answer)}"


def wall(count=50):
    """Записи со стены сообщества.

    Единственный метод, который сервисный ключ открыл нам по-настоящему:
    групповому токену wall.get отвечал ошибкой 27. До него о судьбе постов
    приходилось гадать по журналу маячка, и гадали неверно — отсутствие
    сборщика превью читалось как «вышло без картинки», а на деле запись не
    создавалась вовсе.
    """
    answer = json.loads(fetch(API_WALL, {
        "owner_id": f"-{GROUP_ID}",
        "count": count,
        "access_token": service_key(),
        "v": "5.199",
    }))
    if "error" in answer:
        err = answer["error"]
        sys.exit(f"стена недоступна, {err.get('error_code')}: "
                 f"{err.get('error_msg')}")
    return answer["response"]["items"]


def has_picture(post):
    """Есть ли у записи изображение: своё фото или сниппет ссылки с обложкой."""
    for att in post.get("attachments", []):
        if att["type"] == "photo":
            return True
        if att["type"] == "link" and att["link"].get("photo"):
            return True
    return False


def titles():
    """slug → заголовок разбора.

    Нужен, чтобы узнать пост в записи-статье: у неё в ссылке адрес самого ВК
    (m.vk.com/@gosvyplaty26-rss-…), а не разбора, и по адресу её не найти.
    """
    out = {}
    for path in glob.glob(os.path.join(DOCS, "post", "*.html")):
        slug = os.path.splitext(os.path.basename(path))[0]
        if slug == "index":
            continue
        try:
            with open(path, encoding="utf-8") as f:
                page = f.read(4000)
        except OSError:
            continue
        found = re.search(r'<meta property="og:title" content="(.*?)">', page)
        if found:
            out[normal(found.group(1))] = slug
    return out


def normal(text):
    """Заголовок к сравнимому виду: ВК режет длинные и меняет регистр."""
    return re.sub(r"[^а-яёa-z0-9]+", "", text.lower())[:40]


def match(post, by_title):
    """Какой разбор стоит за записью и каким образом он опубликован."""
    text = post.get("text") or ""
    found = re.search(r"/post/([a-z0-9_]+)", text)
    if found:
        return found.group(1), "сайт"
    for att in post.get("attachments", []):
        if att["type"] != "link":
            continue
        url, link_title = att["link"]["url"], att["link"].get("title", "")
        found = re.search(r"/post/([a-z0-9_]+)", url)
        if found:
            return found.group(1), "сайт"
        # Статья ВК: ссылка ведёт внутрь ВК, узнаём разбор по заголовку.
        head = normal(link_title)
        for known, slug in by_title.items():
            if head and (head.startswith(known[:30]) or known.startswith(head[:30])):
                return slug, "статья"
    head = normal(text.split("\n")[0])
    for known, slug in by_title.items():
        if head and (head.startswith(known[:30]) or known.startswith(head[:30])):
            return slug, "сайт"
    return None, None


def check(days):
    """Что из очереди дошло до стены, с картинкой ли и куда ведёт ссылка.

    Три исхода стоит различать. Обычная запись со сниппетом на разбор — то,
    ради чего всё делалось: и картинка, и трафик. Статья ВК — картинка есть,
    но читатель остаётся внутри ВК. Отсутствие записи — импорт пропустил пост.
    """
    posts = wall()
    by_title = titles()
    now = datetime.now(timezone.utc)
    edge = now - timedelta(days=days)

    published = {}
    for post in posts:
        slug, kind = match(post, by_title)
        if slug and slug not in published:
            published[slug] = (post, kind)

    due = [(w, s) for s, w in planned().items() if edge < w < now]
    if not due:
        print(f"За {days} дн. постов по плану не было.")
        return

    print(f"{'пост':34} {'план':>11}  итог")
    bad = 0
    for when, slug in sorted(due, reverse=True):
        got = published.get(slug)
        if not got:
            verdict, bad = "❌ импорт пропустил", bad + 1
        elif not has_picture(got[0]):
            verdict, bad = "⚠️  без картинки", bad + 1
        elif got[1] == "статья":
            verdict, bad = "🔸 статьёй ВК — трафика нет", bad + 1
        else:
            verdict = "✅ запись со ссылкой и картинкой"
        print(f"{slug:34} {when:%d.%m %H:%M}  {verdict}")
    print(f"\nПостов по плану: {len(due)}, с изъяном: {bad}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--slugs", nargs="+", help="прогреть эти страницы")
    ap.add_argument("--ahead", type=int, default=10,
                    help="сколько ближайших будущих постов прогреть")
    ap.add_argument("--check", action="store_true",
                    help="сверить план публикаций с тем, что на стене")
    ap.add_argument("--days", type=int, default=7,
                    help="за сколько дней сверять план со стеной")
    args = ap.parse_args()

    if args.check:
        check(args.days)
        return

    slugs = args.slugs or upcoming(args.ahead)
    if not slugs:
        print("Прогревать нечего: невышедших постов в очереди нет.")
        return

    key = service_key()
    print(f"Прогреваю превью, страниц: {len(slugs)}")
    for slug in slugs:
        answer = warm(slug, key)
        print(f"  {slug:34} {answer}")
        # Отказ по типу профиля одинаков для всех страниц — незачем повторять
        # его дюжину раз подряд, конвейеру нужна одна внятная строка.
        if "1051" in answer:
            print("  Дальше не пробую: pages.clearCache требует токен "
                  "пользователя, сервисный ключ ему не подходит.")
            return
        # ВК не любит частых обращений: без паузы прилетает ошибка 6.
        time.sleep(0.4)
    print("\nЧерез час-другой посмотри, дошло ли дело до превью:\n"
          "    python3 tool/warm_vk_preview.py --check")


if __name__ == "__main__":
    main()
