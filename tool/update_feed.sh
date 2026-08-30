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

echo "→ пересобираю ленту"
cd "$HERE"
python3 tool/gen_rss.py --out rss-full.xml

echo "→ выкатываю сайт"
rm -rf .wrangler
npx wrangler pages deploy docs --project-name=gosvyplaty --commit-dirty=true 2>&1 | tail -1

echo "→ проверяю, что лента не пустая"
python3 - <<'PY'
import re, urllib.request
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime

# С рабочего Mac домен не открывается из-за VPN — смотрим через Worker.
url = ("https://vk-image-probe.niktethys.workers.dev/peek"
       "?url=https://gosvyplaty.ru/rss.xml&n=40000")
body = urllib.request.urlopen(url, timeout=60).read().decode()
count = body.count("<item>")
print(f"  записей в живой ленте: {count}")
if count == 0:
    print("  ⚠️  лента пуста — ВК публиковать нечего, проверь даты в rss-full.xml")
PY
