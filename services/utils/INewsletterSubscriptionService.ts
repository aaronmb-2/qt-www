import { ParamsNewsletterApi } from './TypesNewsletterSuscription';
import { TypePromiseApiResponse } from '../response/TypesApiResponseHandler';

export interface INewsletterSubscriptionService {
    subscribe(data: ParamsNewsletterApi): TypePromiseApiResponse;
  }