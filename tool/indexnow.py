#!/usr/bin/env python3
"""Сообщает поисковикам об обновлённых страницах через IndexNow.

Зачем. Яндекс сам переобходит сайт неделями, а материал по выплатам стареет
быстро: суммы и сроки меняются. IndexNow — способ сказать «вот эти адреса
изменились, зайдите сейчас». Ключ уже лежит в docs/ отдельным файлом, его и
проверяет поисковик, прежде чем принять список.

Использование:

    python3 tool/indexnow.py                 # все адреса из sitemap.xml
    python3 tool/indexnow.py /post/ /region/ # только совпадающие по подстроке

Запускать ПОСЛЕ деплоя: поисковик придёт по адресам сразу, и если страницы
ещё старые, смысла в уведомлении нет.
"""

import json
import re
import ssl
import sys
import urllib.request

# У python.org-сборки на этой машине нет системных корневых сертификатов, и
# любой https-запрос падает с CERTIFICATE_VERIFY_FAILED. Берём хранилище из
# certifi, если оно есть; иначе остаётся контекст по умолчанию.
try:
    import certifi
    SSL_CTX = ssl.create_default_context(cafile=certifi.where())
except ImportError:
    SSL_CTX = None

HOST = "gosvyplaty.ru"
KEY = "d0aae2754fc94bde89dd6554ea2481d97a6b384349784793b5c5587244e0b35a"
SITEMAP = "docs/sitemap.xml"
# Точка приёма Яндекса. Она же раздаёт уведомление другим участникам
# IndexNow, отдельно отправлять в Bing не нужно.
ENDPOINT = "https://yandex.com/indexnow"
# Ограничение протокола — 10 000 адресов за запрос; шлём с запасом меньше.
CHUNK = 1000


def urls_from_sitemap(path: str) -> list[str]:
    with open(path, encoding="utf-8") as f:
        return re.findall(r"<loc>([^<]+)</loc>", f.read())


def send(urls: list[str]) -> tuple[int, str]:
    body = json.dumps({
        "host": HOST,
        "key": KEY,
        "keyLocation": f"https://{HOST}/{KEY}.txt",
        "urlList": urls,
    }, ensure_ascii=False).encode("utf-8")
    req = urllib.request.Request(
        ENDPOINT, data=body,
        headers={"Content-Type": "application/json; charset=utf-8"})
    try:
        with urllib.request.urlopen(req, timeout=30, context=SSL_CTX) as r:
            return r.status, r.read(200).decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, e.read(300).decode("utf-8", "replace")


def main() -> int:
    urls = urls_from_sitemap(SITEMAP)
    masks = sys.argv[1:]
    if masks:
        urls = [u for u in urls if any(m in u for m in masks)]
    if not urls:
        print("нечего отправлять")
        return 1

    print(f"адресов: {len(urls)}")
    ok = True
    for i in range(0, len(urls), CHUNK):
        part = urls[i:i + CHUNK]
        code, text = send(part)
        # 200 — принято, 202 — принято, ключ ещё проверяется.
        good = code in (200, 202)
        ok = ok and good
        print(f"  {i + 1}–{i + len(part)}: {code} "
              f"{'принято' if good else 'ОТКАЗ ' + text.strip()[:120]}")
    return 0 if ok else 1


if __name__ == "__main__":
    raise SystemExit(main())
