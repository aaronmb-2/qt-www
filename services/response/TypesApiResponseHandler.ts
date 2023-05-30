import type { FetchError } from 'ofetch';
import { _AsyncData } from "nuxt/dist/app/composables/asyncData";
import { EApiResponseStatus } from './EApiResponseHandler';

export type TypeApiResponse = _AsyncData<unknown, FetchError<any> | null>;

export type TypePromiseApiResponse = Promise<_AsyncData<unknown, FetchError<any> | null>>;

export interface ReturnHandleResponse {
    title: string;
    message: any;
    status: EApiResponseStatus;
    isUnhandled: boolean;
    isSuccess: boolean;
}