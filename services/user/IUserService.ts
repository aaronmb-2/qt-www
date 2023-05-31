import { TypePromiseApiResponse } from "../response/TypesApiResponseHandler";
import {
  ParamsUserRegisterApi,
  ParamsUserVerifyEmailApi,
} from "./TypesUserService";

export interface IUserService {
  userRegister(data: ParamsUserRegisterApi): TypePromiseApiResponse;
  userVerifyEmail(data: ParamsUserVerifyEmailApi): TypePromiseApiResponse;
}
