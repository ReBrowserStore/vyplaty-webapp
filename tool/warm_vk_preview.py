#!/usr/bin/env python3
"""Прогрев превью ВКонтакте для страниц разборов.

Зачем. Импорт RSS сам обложку не прикладывает — ВК строит превью, парся
страницу по ссылке, и делает это не всегда. За первую половину сентября
сборщик превью (vkShare) пришёл за карточкой у трёх постов из шести: у тех,
где картинка появилась. У остальных запись вышла голым текстом.

Ждать милости от импорта незачем. У ВК есть метод pages.clearCache — он
заставляет перечитать страницу и построить превью заново. Групповому токену
метод закрыт (ошибка 27), но документация разрешает вызывать его сервисным
ключом приложения, а это обычный ключ из кабинета, без OAuth и разрешений.

Страницы разборов генерируются пачкой, заранее, поэтому прогревать можно
задолго до выхода поста: к моменту импорта превью уже лежит у ВК в кэше.

    export VK_SERVICE_KEY=...            # ключ из кабинета id.vk.ru
    python3 tool/warm_vk_preview.py           # ближайшие 10 будущих постов
    python3 tool/warm_vk_preview.py --ahead 30
    python3 tool/warm_vk_preview.py --slugs sep_care_payment sep_tax_notice
    python3 tool/warm_vk_preview.py --check   # кто приходил за карточками

Проверить результат: --check читает журнал маячка и показывает, за какими
карточками ВК приходил и в какой роли. Строка vkShare означает, что превью
построено.
"""
import argparse
import json
import os
import subprocess
import sys
import time
from datetime import datetime, timedelta, timezone

SITE = "https://gosvyplaty.ru"
API = "https://api.vk.com/method/pages.clearCache"
LOG = "https://vk-image-probe.niktethys.workers.dev/log"
HERE = os.path.dirname(os.path.abspath(__file__))
QUEUE = os.path.expanduser("~/Downloads/vyplaty/vyplaty_bot/content/queue")
QUEUE_TIMES = os.path.join(HERE, "queue_times.json")
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


def check(hours):
    """Кто приходил за карточками: VKRobot забирает ленту, vkShare строит
    превью. Появление vkShare и означает картинку в записи."""
    try:
        lines = fetch(LOG).splitlines()
    except Exception as e:
        sys.exit(f"журнал недоступен: {e}")

    edge = datetime.now(timezone.utc) - timedelta(hours=hours)
    seen = {}
    for line in lines:
        line = line.strip()
        if not line.startswith("{"):
            continue
        try:
            row = json.loads(line)
        except ValueError:
            continue
        what = row.get("what", "")
        if not what.startswith("card:"):
            continue
        ua = row.get("ua") or ""
        role = "vkShare" if "vkShare" in ua else ("VKRobot" if "VKRobot" in ua
                                                  else None)
        if not role:
            continue                       # чужие краулеры нам неинтересны
        try:
            at = datetime.fromisoformat(row["at"].replace("Z", "+00:00"))
        except (KeyError, ValueError):
            continue
        if at < edge:
            continue
        slug = what[5:].rsplit(".", 1)[0]
        seen.setdefault(slug, {"VKRobot": 0, "vkShare": 0})[role] += 1

    if not seen:
        print(f"За {hours} ч ВК за карточками не приходил.")
        return
    print(f"{'пост':34} {'лента':>6} {'превью':>7}")
    for slug, roles in sorted(seen.items()):
        mark = "картинка есть" if roles["vkShare"] else "БЕЗ картинки"
        print(f"{slug:34} {roles['VKRobot']:>6} {roles['vkShare']:>7}   {mark}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--slugs", nargs="+", help="прогреть эти страницы")
    ap.add_argument("--ahead", type=int, default=10,
                    help="сколько ближайших будущих постов прогреть")
    ap.add_argument("--check", action="store_true",
                    help="показать, за какими карточками приходил ВК")
    ap.add_argument("--hours", type=int, default=48,
                    help="глубина проверки журнала в часах")
    args = ap.parse_args()

    if args.check:
        check(args.hours)
        return

    slugs = args.slugs or upcoming(args.ahead)
    if not slugs:
        print("Прогревать нечего: невышедших постов в очереди нет.")
        return

    key = service_key()
    print(f"Прогреваю превью, страниц: {len(slugs)}")
    for slug in slugs:
        print(f"  {slug:34} {warm(slug, key)}")
        # ВК не любит частых обращений: без паузы прилетает ошибка 6.
        time.sleep(0.4)
    print("\nЧерез час-другой посмотри, дошло ли дело до превью:\n"
          "    python3 tool/warm_vk_preview.py --check")


if __name__ == "__main__":
    main()
