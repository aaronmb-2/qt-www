import { ParamsBaseApi } from "../base/TypesBaseService";

export interface ParamsNewsletterApi extends ParamsBaseApi {
    body: {
        email: string;
    }
}
