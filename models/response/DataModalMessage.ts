import { DataBaseModel } from "../base/DataBaseModel";
import { EApiResponseStatus } from "~/services/response/EApiResponseHandler";

export interface DataButtonInfo extends DataBaseModel {
  to?: string;
  themeId: number;
  label: string;
}

export interface DataModalMessage extends DataBaseModel {
  title: string;
  message: string;
  inProgress?: boolean;
  status: EApiResponseStatus;
  buttons: DataButtonInfo[];
}
