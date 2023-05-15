import { DataBaseModel } from "../base/DataBaseModel";

export interface DataPrice extends DataBaseModel {
    amount: number;
    interval: string;
  }
  