import type { FetchError } from 'ofetch';
import { _AsyncData } from "nuxt/dist/app/composables/asyncData";

export type TypeApiResponse = _AsyncData<unknown, FetchError<any> | null>;

export type TypePromiseApiResponse = Promise<_AsyncData<unknown, FetchError<any> | null>>;