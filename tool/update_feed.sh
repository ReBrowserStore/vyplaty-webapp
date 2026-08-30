#!/bin/bash
# Обновление ленты для импорта в сообщество ВКонтакте.
#
# Делает три шага, которые раньше выполнялись руками и однажды разошлись:
# забирает фактическое время публикации из очереди бота, пересобирает
# rss-full.xml и выкатывает сайт.
#
# Запускать после каждой заливки новой партии постов:
#   ./tool/update_feed.sh
#
# Почему нужен первый шаг. В манифестах дата обычно голая — время внутри дня
# подбирает загрузчик, и знает его только база бота. Без выгрузки генератор
# подставлял время создания страницы; посты оказывались старше отсечки, и ВК
# получал пустую ленту. Так публикации в группе встали на четыре дня.
set -e

BOT=bot@192.168.0.106
HERE="$(cd "$(dirname "$0")/.." && pwd)"

echo "→ забираю время публикаций из очереди бота"
cat > /tmp/_times.dart <<'DART'
import 'dart:convert';
import 'package:sqlite3/sqlite3.dart';

void main() {
  final db = sqlite3.open('vyplaty_bot.db');
  final out = <String, String>{};
  for (final r in db.select('select slug, scheduled_at from scheduled_posts')) {
    out[r['slug'] as String] = r['scheduled_at'] as String;
  }
  print(jsonEncode(out));
}
DART
scp -q /tmp/_times.dart "$BOT:~/projects/vyplaty/vyplaty_bot/tool/_times.dart"
ssh "$BOT" 'cd ~/projects/vyplaty/vyplaty_bot && dart run tool/_times.dart 2>/dev/null | grep "^{"; rm -f tool/_times.dart' \
    > "$HERE/tool/queue_times.json"
echo "  времён получено: $(python3 -c "import json;print(len(json.load(open('$HERE/tool/queue_times.json'))))")"

echo "→ проверяю пропорции og-карточек"
python3 - <<'PY2'
import glob, sys
from PIL import Image

bad = []
for f in glob.glob("docs/cards/og/*.jpg"):
    w, h = Image.open(f).size
    if not 1.85 < w / h < 1.95:
        bad.append(f"{f.split('/')[-1]} {w}x{h}")
if bad:
    print("  ⚠️  карточки не в пропорции 1.91:1 — соцсети обрежут их снизу:")
    for b in bad[:5]:
        print(f"      {b}")
    print("  Исправить: make_cards.py <spec>.json <img_dir> --both, затем"
          " gen_post_pages.py")
    sys.exit(1)
print(f"  проверено карточек: {len(glob.glob('docs/cards/og/*.jpg'))}, все целые")
PY2

echo "→ пересобираю ленту"
cd "$HERE"
python3 tool/gen_rss.py --out rss-full.xml

echo "→ выкатываю сайт"
rm -rf .wrangler
npx wrangler pages deploy docs --project-name=gosvyplaty --commit-dirty=true 2>&1 | tail -1

echo "→ проверяю, что лента не пустая"
# Через Worker: с рабочего Mac домен не открывается из-за VPN. curl, а не
# python — у системного питона нет корневых сертификатов.
PEEK="https://vk-image-probe.niktethys.workers.dev/peek?url=https://gosvyplaty.ru/rss.xml&n=40000"
COUNT=$(curl -s --max-time 60 "$PEEK" | grep -c "<item>" || true)
echo "  записей в живой ленте: $COUNT"
if [ "$COUNT" = "0" ]; then
  echo "  ⚠️  лента пуста — ВК публиковать нечего, проверь даты в rss-full.xml"
  exit 1
fi
