import { IPrice } from "~/models/pricing/IPrice";
import { TypeBaseModel } from "./../TypeBaseModel";

export interface TypeTier extends TypeBaseModel {
    name: string;
    href: string;
    featured: boolean;
    price: IPrice;
    mainFeatures: string[];
}

