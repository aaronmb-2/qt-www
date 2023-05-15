import { IBaseModel } from "../base/IBaseModel";

export interface IPrice extends IBaseModel<IPrice> {
  amount: number;
  interval: string;
}
