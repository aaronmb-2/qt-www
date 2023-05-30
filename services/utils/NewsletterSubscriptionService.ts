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
    const fetch = useCustomFetch()
    
    return fetch.request({
      url: NewsletterSubscriptionService.NEWSLETTER_SUBSCRIBE_URL,
      method: "POST",
      locale: data.locale,
      body: data.body,
    })
  }
}

export const newsletterSubscriptionService =
  new NewsletterSubscriptionService();
