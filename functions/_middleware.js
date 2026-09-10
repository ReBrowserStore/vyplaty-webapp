// Счётчик переходов на сайт.
//
// Зачем. Раскрутка началась, ссылки уходят в сообщества и в личку админам, а
// понять, откуда пришли люди, было нечем: на сайте нет ни одного счётчика.
//
// Почему не Яндекс.Метрика и не Google Analytics. На главной сказано, что
// расчёт идёт в браузере и данные никуда не отправляются. Чужой счётчик с
// куками этому обещанию противоречит, да и грузится он у российских
// пользователей заметно дольше самой страницы.
//
// Поэтому считаем на сервере: Cloudflare и так видит запрос, мы лишь
// отправляем короткую отметку в свой воркер. На странице ни одной строки
// скрипта, ни одной куки, ничего не тормозит и не блокируется.
//
// Что записываем: путь страницы и источник перехода. Ни адреса, ни личных
// данных — воркер сохраняет только страну и оператора связи, как и раньше.

const BEACON = "https://vk-image-probe.niktethys.workers.dev/hit";

// Роботы и наши собственные проверки не должны попадать в счёт: иначе
// «переходы» превратятся в отчёт о работе поисковиков.
const ROBOTS = /bot|crawl|spider|slurp|curl|wget|python|node-fetch|headless|preview|vkShare|VKRobot|Go-http|okhttp|monitor/i;

// Куда переход засчитать. Метка в адресе главнее: её мы ставим сами, когда
// раздаём ссылки. Referer — запасной путь, он приходит не всегда.
function source(url, referer) {
  const tag = url.searchParams.get("utm_source") || url.searchParams.get("from");
  if (tag) return tag.slice(0, 40).replace(/[^\w.-]/g, "");
  if (!referer) return "напрямую";
  try {
    const host = new URL(referer).hostname.replace(/^www\./, "");
    if (host.endsWith("gosvyplaty.ru")) return "свои страницы";
    return host.slice(0, 40);
  } catch {
    return "неизвестно";
  }
}

// Считаем только страницы, а не картинки, шрифты и скрипты: иначе один визит
// даст полтора десятка отметок и счёт потеряет смысл.
function isPage(url, request) {
  if (request.method !== "GET") return false;
  if (!(request.headers.get("accept") || "").includes("text/html")) return false;
  const path = url.pathname;
  if (path.startsWith("/api/") || path.startsWith("/cards/")) return false;
  return !/\.(?:js|css|png|jpe?g|svg|webp|ico|woff2?|xml|json|txt|map)$/i.test(path);
}

export async function onRequest(context) {
  const { request, next, waitUntil } = context;
  const url = new URL(request.url);
  const ua = request.headers.get("user-agent") || "";

  if (isPage(url, request) && !ROBOTS.test(ua)) {
    const query = new URLSearchParams({
      what: `visit|${url.pathname}|${source(url, request.headers.get("referer"))}`,
      country: request.cf?.country || "",
      asn: request.cf?.asOrganization || "",
      ua: ua.slice(0, 120),
    });
    // Не задерживаем ответ страницы: отметка уходит уже после того, как
    // читатель получил страницу.
    waitUntil(fetch(`${BEACON}?${query}`).catch(() => {}));
  }

  return next();
}
