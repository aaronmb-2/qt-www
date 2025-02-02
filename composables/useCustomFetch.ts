import { TypePromiseApiResponse } from "~/services/response/TypesApiResponseHandler";
import { userService } from "~/services/user/UserService";

type RequestMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "HEAD"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE";
type RequestBody = Record<string, any>;

const maxRetries = 3;

const useCustomFetch = () => {
  const config = useRuntimeConfig();
  let retryCount = 0;

  const request = async ({
    url,
    method,
    locale,
    accessToken = null,
    refreshToken = null,
    body,
  }: {
    url: string;
    method: RequestMethod;
    locale?: string;
    accessToken?: string | null;
    refreshToken?: string | null;
    body?: RequestBody;
  }): Promise<TypePromiseApiResponse> => {
    while (true) {
      const headers: Record<string, string> = {};
      if (locale) {
        headers["Accept-Language"] = locale;
      }
      if (accessToken) {
        headers.Authorization = `Bearer ${accessToken}`;
      }
      const response = await useFetch(url, {
        baseURL: config.public.apiUrl,
        method,
        headers,
        body,
        onResponse({ response }) {
          response._data.status = response.status;
        },
        onResponseError({ response }) {
          response._data.status = response.status;
        },
      });
      if (
        response.error.value?.status === 401 &&
        retryCount < maxRetries &&
        refreshToken
      ) {
        retryCount++;
        const refreshUserTokenResponse =
          await userService.userLoginRefreshToken();
        if (refreshUserTokenResponse.error.value) {
          return refreshUserTokenResponse;
        }
        if (refreshUserTokenResponse.data.value) {
          userService.setLoggedInUserAccessToken(
            refreshUserTokenResponse.data.value.access_token
          );
          userService.setLoggedInUserAccountStatus(
            refreshUserTokenResponse.data.value.account_status
          );
        }
        accessToken = userService.loggedInUserAccessToken;

        continue;
      }
      // Return the original response if it's not a 401 error or if retries are exhausted
      return response;
    }
  };
  return { request };
};

export default useCustomFetch;
