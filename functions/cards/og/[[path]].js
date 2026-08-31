// Отдача og-карточек с отметкой, кто за ними приходил.
//
// Нужна, чтобы не гадать: если запись в ВК вышла без обложки, по журналу
// видно, приходил ли он за файлом вообще. Логов запросов у Pages на
// бесплатном плане нет, поэтому отмечаем визиты в своём воркере.
export async function onRequest(context) {
  const { request, env, params } = context;
  const h = request.headers;
  const ua = h.get("user-agent") || "";

  // Свои проверки в журнал не пишем — иначе он забьётся моими же запросами.
  if (!/curl|wget|python/i.test(ua)) {
    const q = new URLSearchParams({
      what: `card:${Array.isArray(params.path) ? params.path.join("/") : params.path}`,
      ip: h.get("cf-connecting-ip") || "",
      country: request.cf?.country || "",
      asn: request.cf?.asOrganization || "",
      ua: ua,
    });
    context.waitUntil(
      fetch(`https://vk-image-probe.niktethys.workers.dev/hit?${q}`).catch(() => {})
    );
  }

  return env.ASSETS.fetch(request);
}
