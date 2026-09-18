#!/bin/bash
# Полная пересборка сайта: инструкции → разборы → регионы → выкатка.
#
# Зачем скрипт. Генераторов три, и порядок между ними важен: gen_site.py
# перезаписывает sitemap.xml ЦЕЛИКОМ, а gen_post_pages.py и gen_regions.py
# только дописывают в него свои адреса. Запустишь gen_site последним — карта
# сайта схлопывается со всеми страницами до одиннадцати, и поисковик узнаёт,
# что сайт «похудел» на девяносто три разбора и восемьдесят шесть регионов.
# Так и случилось 18.09.2026; заметил только по счётчику IndexNow.
#
# Запуск:
#     ./tool/rebuild_site.sh            # собрать и выкатить
#     ./tool/rebuild_site.sh --no-deploy  # только собрать
set -euo pipefail

HERE="$(cd "$(dirname "$0")/.." && pwd)"
TOOLS="$HOME/Downloads/vyplaty/vyplaty_bot/tool"
DOCS="$HERE/docs"

[ -d "$TOOLS" ] || { echo "!! Генераторы не найдены: $TOOLS"; exit 1; }

# Главная живёт в web/index.html и правится руками — генератор её не трогает.
# Без этой синхронизации правки главной молча остаются невыкаченными.
echo "→ 0/4 главная: web/index.html → docs/"
for f in index.html styles.css; do
  if ! cmp -s "$HERE/web/$f" "$DOCS/$f"; then
    cp "$HERE/web/$f" "$DOCS/$f"
    echo "   обновлён $f"
  fi
done

echo "→ 1/4 инструкции (перезаписывают карту сайта)"
(cd "$TOOLS" && python3 gen_site.py "$DOCS" >/dev/null)

echo "→ 2/4 разборы и разделы"
(cd "$TOOLS" && python3 gen_post_pages.py "$DOCS" >/dev/null)

echo "→ 3/4 регионы"
(cd "$TOOLS" && python3 gen_regions.py "$DOCS" >/dev/null)

echo "→ 4/4 сводная таблица сумм"
(cd "$TOOLS" && python3 gen_summary.py "$DOCS" >/dev/null)

total=$(grep -c "<loc>" "$DOCS/sitemap.xml")
echo "   адресов в карте сайта: $total"
# Ниже двух сотен — значит какой-то генератор не отработал или порядок сбился.
if [ "$total" -lt 150 ]; then
  echo "!! Карта сайта подозрительно короткая — выкатку не делаю"
  exit 1
fi

if [ "${1:-}" = "--no-deploy" ]; then
  echo "готово (без выкатки)"
  exit 0
fi

echo "→ выкатываю"
cd "$HERE"
npx wrangler pages deploy docs 2>&1 | tail -1

echo "→ сообщаю поисковику"
python3 tool/indexnow.py || echo "   IndexNow не прошёл — не страшно, повторится при следующей сборке"
