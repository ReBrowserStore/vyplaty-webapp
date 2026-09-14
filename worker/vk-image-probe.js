/**
 * Служебный воркер проекта: журнал отметок, чтение журнала и проверка адреса
 * с чужого IP.
 *
 * Зачем он нужен:
 *  • /hit  — счётчик переходов на сайт. Страницы шлют сюда отметку (см.
 *            functions/_middleware.js): ни скриптов, ни кук на самом сайте.
 *  • /log  — выдача журнала. По нему считает сводку tool/visits.py и решает
 *            сторож deploy/check_vk_feed.sh, приходил ли ВК за лентой.
 *  • /peek — GET любого адреса с ответом-описанием. С рабочего Mac
 *            gosvyplaty.ru не открывается из-за VPN, а отсюда открывается.
 *
 * История. 14.09.2026 /log отвечал 500 (error code 1101), при этом /hit
 * бодро отвечал «ok», а в хранилище было пусто. Похоже, при загрузке
 * 23.08.2026 воркер остался без привязки KV: запись молча уходила в никуда,
 * чтение падало на обращении к несуществующему хранилищу. Сторож из-за
 * этого каждый день писал «ВК не забирал ленту», хотя ВК исправно
 * импортировал записи. Поэтому здесь: привязка проверяется явно, ошибки
 * записи не глотаются, а отсутствие журнала отвечает пустотой, а не пятисоткой.
 */

const WEEK = 7 * 24 * 60 * 60; // столько живёт запись журнала, секунд
const MAX_LOG = 1000; // сколько записей отдаём максимум

function text(body, status = 200, type = "text/plain; charset=utf-8") {
  return new Response(body, { status, headers: { "content-type": type } });
}

/** Отметка в журнал. Ключ со временем впереди — так list отдаёт их по порядку. */
async function hit(env, url) {
  if (!env.PROBE_LOG) return text("нет привязки хранилища PROBE_LOG", 500);
  const now = new Date().toISOString();
  const row = {
    at: now,
    what: url.searchParams.get("what") || "",
    country: url.searchParams.get("country") || "",
    asn: url.searchParams.get("asn") || "",
    ua: (url.searchParams.get("ua") || "").slice(0, 200),
  };
  // Случайный хвост: две отметки в одну миллисекунду затирали бы друг друга.
  const key = `hit:${now}:${Math.random().toString(36).slice(2, 8)}`;
  await env.PROBE_LOG.put(key, JSON.stringify(row), { expirationTtl: WEEK });
  return text("ok");
}

/** Журнал строками JSON, свежие сверху. Формат читают visits.py и сторож. */
async function log(env, url) {
  if (!env.PROBE_LOG) return text("");
  const want = Math.min(Number(url.searchParams.get("n")) || 200, MAX_LOG);
  const out = [];
  let cursor;
  do {
    const page = await env.PROBE_LOG.list({ prefix: "hit:", cursor, limit: 1000 });
    out.push(...page.keys.map((k) => k.name));
    cursor = page.list_complete ? null : page.cursor;
  } while (cursor && out.length < MAX_LOG);

  out.sort().reverse();
  const names = out.slice(0, want);
  const rows = await Promise.all(names.map((n) => env.PROBE_LOG.get(n)));
  return text(rows.filter(Boolean).join("\n"));
}

/** GET чужого адреса: с рабочего Mac сайт закрыт VPN, отсюда виден. */
async function peek(url) {
  const target = url.searchParams.get("url");
  if (!target) return text("нужен параметр url", 400);
  const n = Math.min(Number(url.searchParams.get("n")) || 2000, 200000);
  let r;
  try {
    r = await fetch(target, { headers: { "user-agent": "gosvyplaty-peek/1.0" } });
  } catch (e) {
    return text(`не удалось открыть: ${e}`, 502);
  }
  const body = (await r.text()).slice(0, n);
  const head = `HTTP ${r.status}, ${r.headers.get("content-length") || body.length} байт, ` +
    `${r.headers.get("content-type") || "?"}\n\n`;
  return text(head + body);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    switch (url.pathname) {
      case "/hit":
        return hit(env, url);
      case "/log":
        return log(env, url);
      case "/peek":
        return peek(url);
      case "/":
        return text("gosvyplaty probe: /hit, /log, /peek");
      default:
        return text("нет такой точки", 404);
    }
  },
};
