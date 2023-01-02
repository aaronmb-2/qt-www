export default defineNuxtRouteMiddleware((to, from) => {
  var directories = to.fullPath.split("/");
  var lastDirecotry = directories[(directories.length - 1)];
  const config = useRuntimeConfig()
  const toContent = `QuantTrade | ${lastDirecotry}`
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