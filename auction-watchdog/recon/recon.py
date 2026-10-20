#!/usr/bin/env python3
"""Разведка структуры страниц торгов (шаг 0 плана).

Открывает страницы в Chromium, ждёт отрисовки и сохраняет всё, что нужно
для написания парсеров: итоговый DOM, скриншот, таблицы, пары «поле: значение»,
формы, все XHR/fetch-ответы (тут обычно и прячется «внутренний API» SPA),
WebSocket-адреса и признаки антибот-защиты.

Запуск на домашнем сервере / ноутбуке (нужен Python 3.10+):
    pip install playwright && playwright install chromium
    python recon.py https://fedresurs.ru/bankruptmessages/<guid> https://m-ets.ru/239987-1

Для страниц под логином (личный кабинет ЭТП):
    python recon.py --headful --profile ./profile --manual https://m-ets.ru/...
--manual оставляет окно открытым: войдите, пощёлкайте нужные кнопки,
затем нажмите Enter в консоли — всё, что успело загрузиться, попадёт в отчёт.

Куки, Authorization и значения полей паролей в отчёт не пишутся. Флаг --har
дополнительно сохраняет полный HAR — он содержит куки, никому его не пересылайте.
"""
import argparse
import json
import re
import sys
import time
from pathlib import Path
from urllib.parse import urlparse

from playwright.sync_api import sync_playwright

SECRET_HEADERS = {"cookie", "set-cookie", "authorization", "x-csrf-token", "x-xsrf-token"}
BODY_LIMIT = 300_000
ANTIBOT_HINTS = {
    "qrator": r"qrator",
    "ddos-guard": r"ddos-guard|__ddg",
    "servicepipe": r"servicepipe",
    "cloudflare": r"cf-ray|__cf_bm|challenge-platform",
    "variti": r"variti",
    "yandex-smartcaptcha": r"smartcaptcha",
    "recaptcha": r"recaptcha",
    "hcaptcha": r"hcaptcha",
}

EXTRACT_JS = r"""
() => {
  const txt = el => (el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim();
  const sel = el => {
    if (el.id) return '#' + el.id;
    const cls = [...el.classList].slice(0, 3).join('.');
    return el.tagName.toLowerCase() + (cls ? '.' + cls : '');
  };
  const tables = [...document.querySelectorAll('table')].slice(0, 40).map(t => ({
    selector: sel(t),
    rows: [...t.rows].slice(0, 30).map(r => [...r.cells].map(txt)),
  }));
  const pairs = [];
  document.querySelectorAll('dt').forEach(dt => {
    const dd = dt.nextElementSibling;
    if (dd && dd.tagName === 'DD') pairs.push([txt(dt), txt(dd), sel(dt.parentElement)]);
  });
  document.querySelectorAll('tr').forEach(tr => {
    if (tr.cells.length === 2) pairs.push([txt(tr.cells[0]), txt(tr.cells[1]), sel(tr.closest('table'))]);
  });
  // «Метка: значение» в соседних div/span — типично для карточек на SPA
  document.querySelectorAll('div,span,label,p').forEach(el => {
    if (el.children.length) return;
    const t = txt(el);
    if (t.length > 2 && t.length < 80 && /[:：]$/.test(t)) {
      const nxt = el.nextElementSibling || (el.parentElement && el.parentElement.nextElementSibling);
      if (nxt) pairs.push([t, txt(nxt).slice(0, 300), sel(el.parentElement || el)]);
    }
  });
  const forms = [...document.forms].map(f => ({
    selector: sel(f), action: f.action, method: f.method,
    inputs: [...f.elements].map(e => ({name: e.name, type: e.type, id: e.id})),
  }));
  const buttons = [...document.querySelectorAll('button,a.btn,input[type=submit]')]
    .map(b => ({text: txt(b).slice(0, 60), selector: sel(b), href: b.href || null}))
    .filter(b => b.text).slice(0, 80);
  return {
    title: document.title,
    frameworks: {
      angular: !!document.querySelector('[ng-version]'),
      angular_version: (document.querySelector('[ng-version]') || {getAttribute: () => null}).getAttribute('ng-version'),
      react: !!document.querySelector('[data-reactroot]') || !!window.__REACT_DEVTOOLS_GLOBAL_HOOK__,
      next: !!window.__NEXT_DATA__,
      nuxt: !!window.__NUXT__,
      vue: !!document.querySelector('[data-v-app]') || !!window.Vue,
      jquery: !!window.jQuery,
      aspnet_webforms: !!document.querySelector('#__VIEWSTATE'),
      cades_plugin: typeof window.cadesplugin !== 'undefined',
    },
    scripts: [...document.scripts].map(s => s.src).filter(Boolean),
    iframes: [...document.querySelectorAll('iframe')].map(f => f.src),
    tables, pairs: pairs.slice(0, 400), forms, buttons,
    links: [...document.querySelectorAll('a[href]')].map(a => [txt(a).slice(0, 80), a.href]).slice(0, 300),
  };
}
"""


def slug(url: str) -> str:
    p = urlparse(url)
    return re.sub(r"[^\w.-]+", "_", f"{p.netloc}{p.path}")[:120].strip("_")


def clean_headers(headers: dict) -> dict:
    return {k: ("<скрыто>" if k.lower() in SECRET_HEADERS else v) for k, v in headers.items()}


def recon(page, url: str, out: Path, args) -> None:
    out.mkdir(parents=True, exist_ok=True)
    calls, sockets = [], []

    def on_response(resp):
        req = resp.request
        if req.resource_type not in ("xhr", "fetch", "document", "eventsource"):
            return
        item = {
            "t": round(time.time(), 3),
            "type": req.resource_type,
            "method": req.method,
            "url": resp.url,
            "status": resp.status,
            "content_type": resp.headers.get("content-type", ""),
            "request_headers": clean_headers(req.headers),
            "post_data": (req.post_data or "")[:5000] or None,
        }
        if resp.headers.get("set-cookie"):
            item["set_cookie_names"] = re.findall(r"(?:^|\n)\s*([^=;\s]+)=", resp.headers["set-cookie"])
        try:
            if any(x in item["content_type"] for x in ("json", "text", "xml", "javascript")):
                item["body"] = resp.text()[:BODY_LIMIT]
        except Exception as e:  # тело уже недоступно (редирект, обрыв)
            item["body_error"] = str(e)
        calls.append(item)

    page.on("response", on_response)
    page.on("websocket", lambda ws: sockets.append(ws.url))

    main = page.goto(url, wait_until="domcontentloaded", timeout=90_000)
    try:
        page.wait_for_load_state("networkidle", timeout=30_000)
    except Exception:
        pass
    # прокрутка — подгрузить ленивые блоки
    for _ in range(6):
        page.mouse.wheel(0, 2500)
        page.wait_for_timeout(400)
    page.wait_for_timeout(args.wait * 1000)
    if args.manual:
        input(f"\n[{url}]\nСтраница открыта. Сделайте нужные действия в окне и нажмите Enter… ")

    data = page.evaluate(EXTRACT_JS)
    html = page.content()
    (out / "page.html").write_text(html, encoding="utf-8")
    page.screenshot(path=str(out / "screenshot.png"), full_page=True)

    main_headers = clean_headers(main.headers) if main else {}
    haystack = (json.dumps(main_headers) + html[:200_000] + " ".join(data["scripts"])).lower()
    data.update(
        requested_url=url,
        final_url=page.url,
        main_status=main.status if main else None,
        main_headers=main_headers,
        antibot=[name for name, rx in ANTIBOT_HINTS.items() if re.search(rx, haystack)],
        websockets=sockets,
        api_candidates=sorted({c["url"] for c in calls if "json" in c["content_type"]}),
    )
    (out / "summary.json").write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    with open(out / "network.jsonl", "w", encoding="utf-8") as f:
        for c in calls:
            f.write(json.dumps(c, ensure_ascii=False) + "\n")
    print(f"✓ {url}\n  → {out}  (запросов: {len(calls)}, JSON-API: {len(data['api_candidates'])}, "
          f"антибот: {', '.join(data['antibot']) or 'не замечен'}, framework: "
          f"{', '.join(k for k, v in data['frameworks'].items() if v is True) or '—'})")
    page.remove_listener("response", on_response)


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("urls", nargs="+")
    ap.add_argument("--out", default="recon_out")
    ap.add_argument("--headful", action="store_true", help="показать окно браузера")
    ap.add_argument("--profile", help="папка профиля Chromium (сохраняет вход в личный кабинет)")
    ap.add_argument("--manual", action="store_true", help="ждать Enter перед снятием отчёта")
    ap.add_argument("--wait", type=int, default=3, help="доп. ожидание после загрузки, сек")
    ap.add_argument("--har", action="store_true", help="сохранить полный HAR (содержит куки!)")
    ap.add_argument("--executable", help="путь к Chromium, если не тот, что ставит playwright")
    args = ap.parse_args()

    out_root = Path(args.out)
    out_root.mkdir(parents=True, exist_ok=True)
    launch = dict(headless=not args.headful, executable_path=args.executable, locale="ru-RU",
                  timezone_id="Europe/Moscow", viewport={"width": 1440, "height": 900})
    if args.har:
        launch["record_har_path"] = str(out_root / "full.har")

    with sync_playwright() as pw:
        if args.profile:
            ctx = pw.chromium.launch_persistent_context(args.profile, **launch)
        else:
            har = launch.pop("record_har_path", None)
            browser = pw.chromium.launch(headless=launch.pop("headless"),
                                         executable_path=launch.pop("executable_path"))
            ctx = browser.new_context(**launch, **({"record_har_path": har} if har else {}))
        page = ctx.new_page()
        for url in args.urls:
            try:
                recon(page, url, out_root / slug(url), args)
            except Exception as e:
                print(f"✗ {url}: {e}", file=sys.stderr)
        ctx.close()
    print(f"\nГотово. Заархивируйте папку «{out_root}» (без full.har) и пришлите для разбора.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
