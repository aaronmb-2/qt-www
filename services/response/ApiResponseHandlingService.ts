import type { FetchError } from 'ofetch';
import { _AsyncData } from "nuxt/dist/app/composables/asyncData";

import { toastMessageService } from "~/services/response/ToastMessageService";
import { ToastMessage } from '~/models/response/ToastMessage';
import { CheckCircleIcon, XCircleIcon } from "@heroicons/vue/24/outline";
import { ToastStyling } from '~/models/response/EToastMessage';
import { IApiResponseHandlingService } from './IApiResponseHandlingService';

class ApiResponseHandlingService implements IApiResponseHandlingService {
  /**
   * Class that holds all logic regarding the API responses and handling messages towards the user.
   *
   * @remarks
   * This class is a so-called 'service', which (in this case), holds all the logic regarding handling API responses from the server.
   * The TierService implements the IToastMessageService
   *
   */
  handleResponse(data: _AsyncData<unknown, FetchError<any> | null>) {
    if (data.error.value) {
      return this.handleError(data.error.value)
    }
    if (data.data.value) {
      return this.handleSuccess(data.data.value)
    }
  }

  handleError(errorResponse: FetchError) {
    let title = "Something went wrong";
    let message;
    let isUnhandled = false;
    let isSuccess = false;

    if (errorResponse.data) {
      // Http response outside the 2xx range
      const responseBody = errorResponse.data;
      if (responseBody) {
        const responseBodyIsArray = responseBody.constructor === Array;
        if (responseBodyIsArray) {
          message = responseBody[0];
        } else if (
          typeof responseBody === "string" ||
          responseBody instanceof String
        ) {
          message = responseBody;
        } else {
          const responseBodyFirstKey = Object.keys(responseBody)[0];
          const responseBodyFirstKeyValue = responseBody[responseBodyFirstKey];
          const responseBodyFirstKeyValueIsArray =
            responseBodyFirstKeyValue.constructor === Array;

          if (responseBodyFirstKeyValueIsArray) {
            message = responseBodyFirstKeyValue[0];
          } else {
            message = responseBodyFirstKeyValue;
          }
        }
      }

      if (!message) {
        // Default to status codes
        const status = errorResponse.response?.status;

        if (status === 403) {
          message = "You are not allowed to do this.";
        } else if (status === 420) {
          message =
            "Too many requests. Please wait a couple minutes until trying again";
        } else if (status === 400) {
          message = "The request was invalid.";
        } else if (status === 404) {
          message = "Not found";
        }
      }
    }

    if (!message) {
      isUnhandled = true;
      message = errorResponse.message;
    }

    if (!message) {
      message = "😭 Unhandled error:";
    }

    toastMessageService.addToast(
      new ToastMessage({ id: Math.random(), title: title, message: message, timeout: 5000, icon: XCircleIcon, styling: ToastStyling.error })
    );

    return {
      message,
      isUnhandled,
      errorResponse,
      isSuccess,
    };
  }

  handleSuccess(successResponse: any) {
    let title = "Success";
    let message;
    let isUnhandled = false;
    let isSuccess = true;

    if (successResponse.message) {
      message = successResponse.message
    }

    if (!message) {
      // Default to status codes
      const status = successResponse.response.status;

      if (status === 200) {
        message = "OK";
      } else if (status === 201) {
        message =
          "Created";
      } else if (status === 202) {
        message = "In progress";
      }
    }

    if (!message) {
      isUnhandled = true;
      message = "Unhandled response:";
    }

    toastMessageService.addToast(
      new ToastMessage({ id: Math.random(), title: title, message: message, timeout: 5000, icon: CheckCircleIcon, styling: ToastStyling.success})
    );

    return {
      message,
      isUnhandled,
      successResponse,
      isSuccess,
    };
  }
}

export const apiResponseHandlingService = new ApiResponseHandlingService();
