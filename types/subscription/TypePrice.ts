import { TypeBaseModel } from "../base/TypeBaseModel";

export interface TypePrice extends TypeBaseModel {
  amount: number;
  interval: string;
}
