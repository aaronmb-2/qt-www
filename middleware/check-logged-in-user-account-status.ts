import { EAccountStatus } from "~/services/user/EUserService";
import { userService } from "~/services/user/UserService";

export default defineNuxtRouteMiddleware((_, __) => {
  const localePath = useLocalePath();

  if (userService.loggedInUserAccountStatus !== EAccountStatus.subscribed) {
    return navigateTo({
      path: localePath("/platform/billing"),
    });
  }
});
