import { TypeBaseModel } from "./../TypeBaseModel";

export interface TypePrice extends TypeBaseModel {
  monthly: number;
  annually: number;
}
