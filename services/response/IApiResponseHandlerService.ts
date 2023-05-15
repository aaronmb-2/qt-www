import type { FetchError } from 'ofetch';
import { _AsyncData } from "nuxt/dist/app/composables/asyncData";

export interface IApiResponseHandlerService {
    handleResponse(data: _AsyncData<unknown, FetchError<any> | null>): any
    handleError(errorResponse: FetchError): any
    handleSuccess(successResponse: any): any
}