#!/bin/bash
# Досылка поста, который ВК пропустил при импорте.
#
# Зачем. Импорт RSS иногда не создаёт запись вовсе — за первую декаду
# сентября так потерялись четыре поста из девяти. Причина была в порядке
# ленты (свежее оказывалось внизу), но потерянное само не вернётся: guid
# этих записей ВК уже видел и больше за ними не пойдёт.
#
# Досылка приписывает к guid суффикс — для ВК это новая запись. Суффикс
# запоминается в tool/resent.json навсегда: если он пропадёт, guid вернётся
# к прежнему и запись рискует приехать в группу вторым экземпляром.
#
#   tool/resend.sh sep_pension_80
#
# Больше одного поста за раз слать не стоит: выйдут пачкой.
set -eu

HERE="$(cd "$(dirname "$0")/.." && pwd)"
SLUG="${1:-}"

if [ -z "$SLUG" ]; then
  echo "Укажи пост: tool/resend.sh sep_pension_80"
  exit 1
fi
if [ ! -f "$HERE/docs/post/$SLUG.html" ]; then
  echo "Нет такой страницы: docs/post/$SLUG.html"
  exit 1
fi

cd "$HERE"
python3 - "$SLUG" <<'PY'
import json, os, sys
from datetime import datetime

slug = sys.argv[1]
path = os.path.join("tool", "resent.json")
try:
    with open(path, encoding="utf-8") as f:
        rows = json.load(f)
except (OSError, ValueError):
    rows = {}

now = datetime.now().replace(microsecond=0).isoformat()
if slug in rows and not rows[slug].startswith("#"):
    print(f"  {slug} уже досылали {rows[slug]}, повторно не трогаю")
else:
    # Время досылки определяет и место в ленте, и суффикс guid: запись должна
    # выглядеть свежей, иначе ВК до неё не доберётся.
    rows[slug] = now
    with open(path, "w", encoding="utf-8") as f:
        json.dump(rows, f, ensure_ascii=False, indent=2, sort_keys=True)
    print(f"  {slug}: в ленте встанет как свежая запись от {now[:16]}")
PY

echo "→ пересобираю ленту"
python3 tool/gen_rss.py --out rss-full.xml | tail -1

echo "→ выкатываю сайт"
rm -rf .wrangler
npx wrangler pages deploy docs --project-name=gosvyplaty --commit-dirty=true 2>&1 | tail -1

echo "→ проверяю, что пост в живой ленте"
PEEK="https://vk-image-probe.niktethys.workers.dev/peek?url=https://gosvyplaty.ru/rss.xml&n=200000"
if curl -s --max-time 60 "$PEEK" | grep -q "/post/$SLUG"; then
  echo "  ✅ $SLUG в ленте, ВК заберёт его в ближайший обход (15–40 минут)"
else
  echo "  ⚠️  $SLUG в ленту не попал — проверь его время в очереди"
  exit 1
fi
