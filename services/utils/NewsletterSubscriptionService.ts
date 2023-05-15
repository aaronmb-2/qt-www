import { INewsletterSubscriptionService } from "./INewsletterSubscriptionService";
import { ParamsNewsletterApi } from './TypesNewsletterSuscription';
import { TypePromiseApiResponse } from '../response/TypesApiResponseHandler';

class NewsletterSubscriptionService implements INewsletterSubscriptionService{
  /**
   * Class that holds all logic regarding the Newsletter Subscriptions (subscribing/unsubscribing).
   *
   * @remarks
   * This class is a so-called 'service', which (in this case), provides logic for handling Newsletter Subscriptions.
   * The NewsletterSubscriptionService implements the INewsletterSubscriptionService
   *
   */
  static NEWSLETTER_SUBSCRIBE_URL = `/v1/utils/newsletter-subscribers/`;

  async subscribe(data: ParamsNewsletterApi): TypePromiseApiResponse {
    const config = useRuntimeConfig()
    const { locale }: { locale: any;} = useI18n();

    const response = await useFetch(
      NewsletterSubscriptionService.NEWSLETTER_SUBSCRIBE_URL,
      {
        baseURL: config.public.apiUrl,
        method: "POST",
        headers: {
          "Accept-Language": locale.value
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
