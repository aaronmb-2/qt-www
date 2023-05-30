import { DataBaseModel } from "../base/DataBaseModel";
import { EApiResponseStatus } from "~/services/response/EApiResponseHandler";

export interface DataToastMessage extends DataBaseModel {
    title: string;
    message: string;
    status: EApiResponseStatus;
    timeout?: number;
  }