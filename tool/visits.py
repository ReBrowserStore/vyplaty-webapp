#!/usr/bin/env python3
"""Переходы на сайт: откуда пришли и на какие страницы.

Считает не скрипт на странице, а middleware Cloudflare — он отправляет
короткую отметку в наш воркер. На сайте поэтому нет ни счётчиков, ни кук.

Журнал воркера живёт неделю, а историю переходов терять незачем: при каждом
запуске свежие отметки дописываются в tool/visits_log.jsonl, и сводка строится
уже по всему накопленному. Значит запускать стоит хотя бы раз в неделю.

    python3 tool/visits.py                 # сводка за 7 дней
    python3 tool/visits.py --days 30
    python3 tool/visits.py --days 1 --pages 20

Чтобы различать площадки, раздавайте ссылки с меткой:

    https://gosvyplaty.ru/?from=mamy_nsk
    https://gosvyplaty.ru/post/oct_nsu_choice?from=vk_bigmam

Без метки источник определяется по Referer — он приходит не всегда, и переход
из личных сообщений выглядит прямым заходом.
"""
import argparse
import json
import os
import subprocess
import sys
from collections import Counter
from datetime import datetime, timedelta, timezone

LOG = "https://vk-image-probe.niktethys.workers.dev/log"
HERE = os.path.dirname(os.path.abspath(__file__))
HISTORY = os.path.join(HERE, "visits_log.jsonl")
TZ = timezone(timedelta(hours=5))


def fetch():
    """Свежий журнал воркера. Через curl: у системного питона на этой машине
    нет корневых сертификатов."""
    out = subprocess.run(["curl", "-s", "--max-time", "60", LOG],
                         capture_output=True, text=True)
    if out.returncode != 0:
        sys.exit(f"журнал недоступен: {out.stderr.strip()}")
    rows = []
    for line in out.stdout.splitlines():
        line = line.strip()
        if not line.startswith("{"):
            continue
        try:
            row = json.loads(line)
        except ValueError:
            continue
        if str(row.get("what", "")).startswith("visit|"):
            rows.append(row)
    return rows


def merge(fresh):
    """Дописать новые отметки в историю, вернуть всю историю.

    Ключ — время плюс метка: воркер выдаёт журнал целиком, и без такой сверки
    каждый запуск удваивал бы записи.
    """
    seen, rows = set(), []
    if os.path.exists(HISTORY):
        with open(HISTORY, encoding="utf-8") as f:
            for line in f:
                try:
                    row = json.loads(line)
                except ValueError:
                    continue
                rows.append(row)
                seen.add((row.get("at"), row.get("what")))

    added = 0
    with open(HISTORY, "a", encoding="utf-8") as f:
        for row in fresh:
            key = (row.get("at"), row.get("what"))
            if key in seen:
                continue
            seen.add(key)
            rows.append(row)
            f.write(json.dumps(row, ensure_ascii=False) + "\n")
            added += 1
    return rows, added


def split(mark):
    """visit|/путь|источник → путь, источник."""
    parts = mark.split("|")
    path = parts[1] if len(parts) > 1 else "?"
    where = parts[2] if len(parts) > 2 and parts[2] else "напрямую"
    return path, where


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--days", type=int, default=7, help="период сводки")
    ap.add_argument("--pages", type=int, default=10, help="сколько страниц показать")
    args = ap.parse_args()

    rows, added = merge(fetch())
    edge = datetime.now(timezone.utc) - timedelta(days=args.days)

    hits = []
    for row in rows:
        try:
            at = datetime.fromisoformat(row["at"].replace("Z", "+00:00"))
        except (KeyError, ValueError):
            continue
        if at >= edge:
            hits.append((at, *split(row["what"]), row.get("country") or "—"))

    print(f"Переходы за {args.days} дн.: {len(hits)}"
          f"   (новых отметок в этот раз: {added}, всего в истории: {len(rows)})")
    if not hits:
        print("\nПусто. Либо переходов не было, либо сайт ещё не выкачен "
              "с новым счётчиком.")
        return

    where = Counter(h[2] for h in hits)
    print("\nОткуда пришли:")
    for name, count in where.most_common(12):
        share = round(100 * count / len(hits))
        print(f"  {name:24} {count:>5}  {'▓' * max(1, share // 4)} {share}%")

    pages = Counter(h[1] for h in hits)
    print("\nКуда попали:")
    for path, count in pages.most_common(args.pages):
        print(f"  {path:44} {count:>5}")

    days = Counter(h[0].astimezone(TZ).strftime("%d.%m") for h in hits)
    print("\nПо дням:")
    for day in sorted(days, key=lambda d: (d[3:], d[:2])):
        print(f"  {day}  {days[day]:>5}  {'▓' * min(40, days[day])}")


if __name__ == "__main__":
    main()
