export default defineNuxtRouteMiddleware((to, from) => {
    const config = useRuntimeConfig()
    const toContent = `QuantTrade | ${String(to.name)}`
    useHead({
      title: toContent,
      meta: [
        { hid: 'og:title', property: 'og:title', content: toContent },
        { hid: 'og:url', property: 'og:url', content: config.baseUrl + String(to.name) },
        { hid: "twitter:title", name: "twitter:title", content: toContent },
        { hid: "twitter:url", name: "twitter:url", content: config.baseUrl + String(to.name) },
      ]
    });
  });