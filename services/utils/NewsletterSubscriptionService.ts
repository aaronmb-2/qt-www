import type { FetchError } from 'ofetch';
import { _AsyncData } from "nuxt/dist/app/composables/asyncData";
import { NewsletterApiParams } from "../types/NewsletterAPITypes";
import { INewsletterSubscriptionService } from "./INewsletterSubscriptionService";

class NewsletterSubscriptionService implements INewsletterSubscriptionService{
  /**
   * Class that holds all logic regarding the Newsletter Subscriptions (subscribing/unsubscribing).
   *
   * @remarks
   * This class is a so-called 'service', which (in this case), provides logic for handling Newsletter Subscriptions.
   * The TierService implements the INewsletterSubscriptionService
   *
   */
  static NEWSLETTER_SUBSCRIBE_URL = `/v1/utils/newsletter/`;

  async subscribe(data: NewsletterApiParams): Promise<_AsyncData<unknown, FetchError<any> | null>> {
    const config = useRuntimeConfig()

    const response = await useFetch(
      "/v1/utils/newsletter-subscribers/",
      {
        baseURL: config.public.apiUrl,
        method: "POST",
        headers: {
          // Access a private variable (only available on the server)
          // Authorization: `Api-Key ${config.public.apiToken}`
        },
        body: {
          email: data.email,
        },
      }
    );
    return response;
  }
}

export const newsletterSubscriptionService =
  new NewsletterSubscriptionService();
