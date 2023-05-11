import type { FetchError } from 'ofetch';
import { _AsyncData } from "nuxt/dist/app/composables/asyncData";
import { NewsletterApiParams } from '../types/NewsletterAPITypes';

export interface INewsletterSubscriptionService {
    subscribe(data: NewsletterApiParams): Promise<_AsyncData<unknown, FetchError<any> | null>>;
  }