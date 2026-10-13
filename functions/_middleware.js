// Счётчик переходов на сайт.
//
// Зачем. Раскрутка началась, ссылки уходят в сообщества и в личку админам, а
// понять, откуда пришли люди, было нечем: на сайте нет ни одного счётчика.
//
// Считаем на сервере: Cloudflare и так видит запрос, мы лишь отправляем
// короткую отметку в свой воркер.
//
// Яндекс.Метрика добавлена 11.10.2026 решением владельца. Аудит показал, что
// Яндекс держит в поиске 17 страниц из 218 («малоценные»): у нового сайта нет
// ни ссылок, ни данных о поведении посетителей. Метрика даёт Яндексу обход по
// счётчику и сведения о вовлечённости, а нам — честную статистику вместо
// журнала, где три четверти «визитов» оказались ботами. Вебвизор и аналитика
// форм выключены: ответы анкеты Метрика не видит. Политика конфиденциальности
// и ответ «Данные сохраняются где-то» на главной обновлены под это.
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

// Сканеры уязвимостей перебирают /wp-admin, /.git, /.env и прочее, чего у нас
// нет и не было. 22.09.2026 такие запросы составляли основную часть «визитов»:
// из 150 отметок за сутки людей из России было четверо.
const JUNK = /\.(?:php|aspx?|env|bak|sql)$|\/wp-|\/\.git|\/\.env|\/xmlrpc|\/phpmyadmin|\/vendor\/|\/cgi-bin/i;

// Иконка сайта. Генераторов страниц четыре, у каждого свой <head>: вписывать
// иконку в каждый — значит, что новая страница её тут же потеряет. Здесь она
// добавляется в любую HTML-страницу, включая будущие и страницу 404.
// Яндекс.Вебмастер просил SVG или PNG 120×120 (рекомендация с 12.09.2026).
const ICONS = `
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-120.png" sizes="120x120" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">`;

// Яндекс.Метрика, счётчик 113600750 (аккаунт nikolablenin). Код из кабинета,
// но webvisor явно false: кабинет выдаёт код с webvisor:true, даже когда
// Вебвизор при создании выключен. ecommerce убран — продаж на сайте нет.
const METRIKA_ID = 113600750;
const METRIKA = `
<script type="text/javascript">
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}', 'ym');
ym(${METRIKA_ID}, 'init', {ssr:true, webvisor:false, clickmap:false, referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/${METRIKA_ID}" style="position:absolute; left:-9999px;" alt="" /></div></noscript>`;

// Файл подтверждения прав в Яндекс.Вебмастере. Cloudflare Pages убирает
// расширение .html и отвечает редиректом 308, а Яндексу нужен прямой 200 по
// адресу с расширением — иначе подтверждение не проходит.
const YANDEX_FILE = "/yandex_cf50e35e89f8f297.html";
const YANDEX_BODY = `<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body>Verification: cf50e35e89f8f297</body>
</html>`;

// Один адрес сайта. www.gosvyplaty.ru и служебный gosvyplaty.pages.dev отдавали
// весь сайт с кодом 200 — для поисковика это копии. У miaamanita.ru из-за такой
// же www-копии Google выбрал канонической не ту страницу (13.10.2026).
// Превью выкладок <хеш>.gosvyplaty.pages.dev не трогаем: по ним проверяется
// выкатка, и Cloudflare сам отдаёт им x-robots-tag: noindex.
const CANONICAL_HOST = "gosvyplaty.ru";
const MIRRORS = new Set(["www.gosvyplaty.ru", "gosvyplaty.pages.dev"]);

export async function onRequest(context) {
  const { request, next, waitUntil } = context;
  const url = new URL(request.url);

  if (MIRRORS.has(url.hostname)) {
    return Response.redirect(
      `https://${CANONICAL_HOST}${url.pathname}${url.search}`, 301);
  }

  if (url.pathname === YANDEX_FILE) {
    return new Response(YANDEX_BODY, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
  const ua = request.headers.get("user-agent") || "";

  if (isPage(url, request) && !ROBOTS.test(ua) && !JUNK.test(url.pathname)) {
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

  const res = await next();
  if ((res.headers.get("content-type") || "").includes("text/html")) {
    return new HTMLRewriter()
      .on("head", { element(el) { el.append(ICONS + METRIKA, { html: true }); } })
      .transform(res);
  }
  return res;
}
