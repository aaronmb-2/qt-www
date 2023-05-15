import { IBaseModel } from "../base/IBaseModel";

export interface IInterval extends IBaseModel<IInterval> {
  value: string;
  label: string;
}
