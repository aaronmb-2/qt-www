import { IBaseData } from "../base/IBaseData";

export interface IFrequency extends IBaseData<IFrequency> {
  value: string;
  label: string;
}
