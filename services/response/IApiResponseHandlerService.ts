import type { FetchError } from "ofetch";

export interface IApiResponseHandlerService {
  handleResponse(data: _AsyncData<unknown, FetchError<any> | null>): any;
  handleError(errorResponse: FetchError): any;
  handleSuccess(successResponse: any): any;
}
