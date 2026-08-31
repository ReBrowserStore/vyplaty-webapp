// Лента для импорта в сообщество ВКонтакте.
//
// Отдаёт не весь rss-full.xml, а только «созревшие» записи: пост попадает в
// ленту не раньше того времени, когда он выходит в Telegram-канале. Без этого
// фильтра ВК при первом же обращении выгреб бы все 43 записи разом — включая
// те, что ещё не опубликованы: страницы на сайте генерируются пачкой, заранее.
//
// Нижняя отсечка — день, когда включили импорт. Всё, что вышло до неё, ВК
// показывать не должен: это архив, он уже был опубликован в группе руками.

// Нижняя отсечка — переход на схему «картинки через импорт RSS». Всё, что
// вышло раньше, ВК уже публиковал кросспостом бота: покажем — получим дубли.
const CUTOFF = Date.parse("2026-08-26T00:00:00Z");

// Маячок: у Pages на бесплатном плане нет логов запросов, а знать, забирает
// ли ВК ленту, необходимо — иначе при пропаже постов непонятно, чинить ленту
// или настройку сообщества. Отправляем в свой воркер, не задерживая ответ.
function beacon(context, request) {
  const h = request.headers;
  const ua = h.get("user-agent") || "";
  // Свои проверки не считаем: иначе сторож увидит их и решит, что ВК ходит.
  if (/curl|wget|python|node-fetch/i.test(ua)) return;
  const q = new URLSearchParams({
    what: "rss",
    ip: h.get("cf-connecting-ip") || "",
    country: request.cf?.country || "",
    asn: request.cf?.asOrganization || "",
    ua,
  });
  context.waitUntil(
    fetch(`https://vk-image-probe.niktethys.workers.dev/hit?${q}`).catch(() => {})
  );
}

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  beacon(context, request);

  const source = await env.ASSETS.fetch(new URL("/rss-full.xml", url));
  if (!source.ok) {
    return new Response("feed source unavailable", { status: 502 });
  }
  const xml = await source.text();

  const now = Date.now();
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) || [];
  const ready = items.filter((item) => {
    const m = item.match(/<pubDate>(.*?)<\/pubDate>/);
    if (!m) return false;
    const at = Date.parse(m[1]);
    return at >= CUTOFF && at <= now;
  });

  // Заголовок канала берём из исходника, чтобы не дублировать его здесь.
  const head = xml.slice(0, xml.indexOf("<item>") >= 0 ? xml.indexOf("<item>") : xml.length);
  const body = ready.length ? ready.join("\n") + "\n" : "";

  return new Response(`${head}${body}  </channel>\n</rss>\n`, {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      // Без кэша: пост должен попадать в ленту в ту же минуту, когда вышел
      // в канале. Пять минут кэша однажды спрятали свежую запись.
      "cache-control": "no-store",
    },
  });
}
