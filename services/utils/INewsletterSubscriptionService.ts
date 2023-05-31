import { TypePromiseApiResponse } from "../response/TypesApiResponseHandler";
import { ParamsNewsletterApi } from "./TypesNewsletterSuscription";

export interface INewsletterSubscriptionService {
  subscribe(data: ParamsNewsletterApi): TypePromiseApiResponse;
}
