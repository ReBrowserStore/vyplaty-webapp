// Лента для импорта в сообщество ВКонтакте.
//
// Отдаёт не весь rss-full.xml, а только «созревшие» записи: пост попадает в
// ленту не раньше того времени, когда он выходит в Telegram-канале. Без этого
// фильтра ВК при первом же обращении выгреб бы все 43 записи разом — включая
// те, что ещё не опубликованы: страницы на сайте генерируются пачкой, заранее.
//
// Нижняя отсечка — день, когда включили импорт. Всё, что вышло до неё, ВК
// показывать не должен: это архив, он уже был опубликован в группе руками.

const CUTOFF = Date.parse("2026-08-21T00:00:00Z");

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

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
      // ВК опрашивает ленту нечасто; пять минут кэша ему не мешают, а сайту
      // экономят вызовы функции.
      "cache-control": "public, max-age=300",
    },
  });
}
