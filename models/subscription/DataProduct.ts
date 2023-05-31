import { DataBaseModel } from "../base/DataBaseModel";
import { DataPrice } from "./DataPrice";
import { DataUniqueSellingPoint } from "./DataUniqueSellingPoint";

export interface DataProduct extends DataBaseModel {
  name: string;
  featured: boolean;
  prices: DataPrice[];
  uniqueSellingPoints: DataUniqueSellingPoint[];
}
