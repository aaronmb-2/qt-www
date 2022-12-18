export default defineNuxtRouteMiddleware((to, from) => {
  return navigateTo({
    path: "/home",
  });
});
