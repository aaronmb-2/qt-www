import { userService } from "~/services/user/UserService";

export default defineNuxtRouteMiddleware(async (_, __) => {
  if (!userService.hasLoggedInUserAccessToken() || !userService.hasLoggedInUserRefreshToken()) {
    const localePath = useLocalePath();
    return navigateTo({
      path: localePath('/auth/login'),
    });
  }
});