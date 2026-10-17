// Общая обработка всех запросов к сайту: единый адрес, файл подтверждения
// Яндекса, иконки и Яндекс.Метрика в каждой HTML-странице.
//
// Яндекс.Метрика добавлена 11.10.2026 решением владельца. Аудит показал, что
// Яндекс держит в поиске 17 страниц из 218 («малоценные»): у нового сайта нет
// ни ссылок, ни данных о поведении посетителей. Метрика даёт Яндексу обход по
// счётчику и сведения о вовлечённости, а нам — честную статистику. Вебвизор и
// аналитика форм выключены: ответы анкеты Метрика не видит. Политика
// конфиденциальности и ответ «Данные сохраняются где-то» на главной обновлены
// под это.
//
// Свой счётчик переходов (отметка в воркер vk-image-probe на каждую страницу)
// отключён 18.10.2026. Каждая отметка — запись в Workers KV, а бесплатно их
// 1000 в сутки. 17.10 роботы с серверных сетей США под видом обычного Chrome
// набили 900 отметок, людей из России среди них было четверо, и Cloudflare
// предупредил о лимите. Посещения теперь считает только Метрика.

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
  const { request, next } = context;
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

  const res = await next();
  if ((res.headers.get("content-type") || "").includes("text/html")) {
    return new HTMLRewriter()
      .on("head", { element(el) { el.append(ICONS + METRIKA, { html: true }); } })
      .transform(res);
  }
  return res;
}
