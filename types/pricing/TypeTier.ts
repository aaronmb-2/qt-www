import { TypeBaseModel } from "./../TypeBaseModel";
import { IPrice } from "~/models/pricing/IPrice";

export interface TypeTier extends TypeBaseModel {
  name: string;
  href: string;
  featured: boolean;
  price: IPrice;
  mainFeatures: string[];
}
