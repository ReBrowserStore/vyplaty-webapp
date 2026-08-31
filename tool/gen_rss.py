#!/usr/bin/env python3
"""RSS-лента постов для импорта в сообщество ВКонтакте.

Зачем. Прикрепить карточку к записи через VK API нельзя: сообществу закрыт
стеновой загрузчик фото (ошибка 27), а превью по ссылке ВК не строит. Зато у
сообществ есть встроенный импорт RSS, и обложку он берёт из ленты — первую
картинку в содержимом элемента. То есть картинка в записи достижима, просто
не через API.

Что важно для ВК:
* обложка — первый <img> внутри описания (или поле img);
* абзацы должны быть <p>, а не <br>: иначе текст слипается;
* одна лента на сообщество, чужие ленты импортировать нельзя.

Запуск из корня репозитория сайта:

    python3 tool/gen_rss.py                 # все посты
    python3 tool/gen_rss.py --limit 1       # только свежий (для проверки)
    python3 tool/gen_rss.py --only slug     # конкретный пост
"""
import argparse
import glob
import html
import json
import os
import re
from datetime import datetime, timezone

SITE = "https://gosvyplaty.ru"
# Хост картинок. Обычно тот же сайт, но его можно подменить: ВК не показывал
# обложку, и подмена хоста проверяет, не в Cloudflare ли дело.
IMAGE_HOST = SITE
FIXED_IMAGE = None
# Сколько знаков анонса уходит в ВК до ссылки на полный разбор.
ANNOUNCE_CHARS = 550
DOCS = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "docs")
# Очередь автопостинга: оттуда берём плановое время публикации поста. Дата
# файла на диске не годится — страницы генерируются заранее, пачкой.
QUEUE = os.path.expanduser("~/Downloads/vyplaty/vyplaty_bot/content/queue")
# Фактическое время публикации, выгруженное из очереди бота (tool/_times).
# В манифестах дата обычно голая — время внутри дня подбирает загрузчик, и
# знает его только база. Без этого файла берём начало дня, и тогда запись в
# ВК появляется раньше, чем пост выходит в канале.
QUEUE_TIMES = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                           "queue_times.json")


def scheduled_dates():
    """slug → запланированное время публикации, из манифестов очереди.

    Обходим всю папку очереди, а не один файл: партии постов лежат по
    подпапкам (sep2026 и далее). Пока читался только корневой manifest.json,
    новым постам подставлялось время генерации страницы — они оказывались
    старше отсечки, и лента для ВК выходила пустой.
    """
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
            for item in (data if isinstance(data, list) else [data]):
                slug, when = item.get("slug"), item.get("scheduled_at")
                if not slug or not when:
                    continue
                if slug in dates:
                    continue  # время из базы точнее даты в манифесте
                try:
                    dates[slug] = datetime.fromisoformat(str(when))
                except ValueError:
                    continue
    return dates


def vk_texts():
    """slug → готовый текст для ВК из манифестов очереди.

    Он написан специально под ВК: заголовок прописными, абзацы через пустую
    строку, без HTML-тегов. Пока лента собирала текст из страницы, в записи
    не было заголовка — пост начинался прямо с завязки.
    """
    out = {}
    for dirpath, _, files in os.walk(QUEUE):
        for name in files:
            if not name.startswith("manifest") or not name.endswith(".json"):
                continue
            try:
                with open(os.path.join(dirpath, name), encoding="utf-8") as f:
                    data = json.load(f)
            except (OSError, ValueError):
                continue
            for item in (data if isinstance(data, list) else [data]):
                slug, vk = item.get("slug"), item.get("vk_text")
                if slug and vk and slug not in out:
                    out[slug] = vk.strip()
    return out


VK_TEXTS = vk_texts()


def meta(page, prop):
    m = re.search(
        rf'<meta property="{re.escape(prop)}" content="(.*?)">', page, re.S
    )
    return html.unescape(m.group(1)) if m else ""


def body_paragraphs(page):
    """Текст поста абзацами. Служебные блоки (кнопка, сноска) отбрасываем."""
    article = re.search(r"<article[^>]*>(.*?)</article>", page, re.S)
    source = article.group(1) if article else page
    out = []
    for raw in re.findall(r"<p[^>]*>(.*?)</p>", source, re.S):
        if 'class="note"' in raw or "cta" in raw:
            continue
        text = re.sub(r"<[^>]+>", "", raw).strip()
        if text:
            out.append(text)
    return out


def jpeg_copy(slug):
    """JPEG-двойник карточки.

    PNG в <enclosure> ВК проигнорировал — запись вышла без обложки. JPEG для
    лент — формат по умолчанию, с ним больше шансов; заодно вес втрое меньше.
    """
    src = os.path.join(DOCS, "cards", "og", f"{slug}.png")
    dst = os.path.join(DOCS, "cards", "og", f"{slug}.jpg")
    if not os.path.exists(src):
        return None
    if not os.path.exists(dst) or os.path.getmtime(dst) < os.path.getmtime(src):
        try:
            from PIL import Image
            Image.open(src).convert("RGB").save(dst, "JPEG", quality=88,
                                                optimize=True)
        except ImportError:
            return None
    return f"{IMAGE_HOST}/cards/og/{slug}.jpg"


def item(slug, page, planned, bump=""):
    title = meta(page, "og:title")
    image = FIXED_IMAGE or jpeg_copy(slug) or meta(page, "og:image")
    link = f"{SITE}/post/{slug}"

    # В ленту идёт АНОНС, а не весь пост. Так задумано:
    # * ВК строит сниппет ссылки (картинка + заголовок + домен) только когда
    #   текст короткий — при полной простыне ссылка теряется, и запись
    #   выходит голым текстом без обложки;
    # * читатель уходит дочитывать на сайт, а это трафик и повод вернуться.
    # Полный текст остаётся в Telegram и на странице разбора.
    vk = VK_TEXTS.get(slug)
    if vk:
        blocks = [p.strip() for p in vk.split("\n\n") if p.strip()]
    else:
        blocks = [title.upper()] + body_paragraphs(page)

    paragraphs, used = [], 0
    for block in blocks:
        paragraphs.append(block)
        used += len(block)
        # Заголовок плюс два-три абзаца: достаточно, чтобы понять, о чём
        # речь, и мало, чтобы ВК не съел ссылку.
        if used > ANNOUNCE_CHARS and len(paragraphs) >= 3:
            break
    if len(paragraphs) < len(blocks):
        paragraphs.append("Читать целиком — на сайте:")

    # Абзацы разделяем не только тегами, но и настоящими переносами: ВК теги
    # вырезает, и без переносов весь пост слипается в одну простыню.
    parts = [f'<img src="{html.escape(image)}" alt="{html.escape(title)}" />', ""]
    for para in paragraphs:
        parts.append("<p>" + html.escape(para).replace("\n", "<br />") + "</p>")
        parts.append("")
    parts.append(f'<p><a href="{link}">Разбор на сайте: {link}</a></p>')
    content = "\n".join(parts)

    # Плановое время публикации: по нему функция /rss.xml решает, показывать
    # ли пост ВКонтакте. Иначе он выгребет всю ленту разом, включая те посты,
    # что ещё не вышли в канале.
    when = planned or datetime.fromtimestamp(
        os.path.getmtime(os.path.join(DOCS, "post", f"{slug}.html")),
        tz=timezone.utc,
    )
    if when.tzinfo is None:
        when = when.replace(tzinfo=timezone.utc)
    pub = when.strftime("%a, %d %b %Y %H:%M:%S +0000")

    return f"""    <item>
      <title>{html.escape(title)}</title>
      <link>{link}</link>
      <guid isPermaLink="false">{link}{bump}</guid>
      <pubDate>{pub}</pubDate>
      <enclosure url="{html.escape(image)}" type="image/jpeg" length="0" />
      <media:content url="{html.escape(image)}" medium="image"
        type="image/jpeg" width="1200" height="630" />
      <media:thumbnail url="{html.escape(image)}" width="1200" height="630" />
      <description><![CDATA[{content}]]></description>
      <content:encoded><![CDATA[{content}]]></content:encoded>
    </item>"""


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=0, help="сколько свежих постов")
    ap.add_argument("--only", help="один пост по slug")
    ap.add_argument("--out", default="rss.xml", help="имя файла в docs/")
    ap.add_argument("--bump", default="",
                    help="суффикс к guid: заставляет ВК считать запись новой "
                         "и импортировать её заново (для проверок)")
    ap.add_argument("--bump-only",
                    help="применить --bump к одному посту, а не ко всем: "
                         "иначе ВК переимпортирует всю ленту и надаёт дублей")
    ap.add_argument("--now", action="store_true",
                    help="проставить текущее время: ВК берёт только записи, "
                         "появившиеся после подключения ленты")
    ap.add_argument("--image-host",
                    help="откуда брать карточки (по умолчанию сам сайт)")
    ap.add_argument("--image-url", help="один конкретный адрес картинки")
    args = ap.parse_args()

    if args.image_host:
        global IMAGE_HOST
        IMAGE_HOST = args.image_host.rstrip("/")
    if args.image_url:
        global FIXED_IMAGE
        FIXED_IMAGE = args.image_url

    pages = sorted(
        glob.glob(os.path.join(DOCS, "post", "*.html")),
        key=os.path.getmtime,
        reverse=True,
    )
    pages = [p for p in pages if not p.endswith("index.html")]
    if args.only:
        pages = [p for p in pages if os.path.basename(p) == f"{args.only}.html"]
    if args.limit:
        pages = pages[: args.limit]

    planned = scheduled_dates()
    stamp = datetime.now(timezone.utc) if args.now else None
    items = []
    for path in pages:
        slug = os.path.splitext(os.path.basename(path))[0]
        with open(path, encoding="utf-8") as f:
            bump = args.bump
            if args.bump_only and slug != args.bump_only:
                bump = ""
            items.append(
                item(slug, f.read(), stamp or planned.get(slug), bump)
            )

    now = datetime.now(timezone.utc).strftime("%a, %d %b %Y %H:%M:%S +0000")
    feed = f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:media="http://search.yahoo.com/mrss/"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Калькулятор выплат — разборы</title>
    <link>{SITE}/</link>
    <atom:link href="{SITE}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Пособия, субсидии и налоговые вычеты: что положено и как оформить</description>
    <language>ru</language>
    <lastBuildDate>{now}</lastBuildDate>
{chr(10).join(items)}
  </channel>
</rss>
"""
    out = os.path.join(DOCS, args.out)
    with open(out, "w", encoding="utf-8") as f:
        f.write(feed)
    print(f"  {args.out}: {len(items)} записей, {len(feed) // 1024} КБ")
    for path in pages:
        print(f"    · {os.path.splitext(os.path.basename(path))[0]}")


if __name__ == "__main__":
    main()
