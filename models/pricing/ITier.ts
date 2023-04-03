import { IBaseData } from "../base/IBaseData";
import { IPrice } from "./IPrice";

export interface ITier extends IBaseData<ITier>{
    name: string;
    href: string;
    featured: boolean;
    price: IPrice;
    mainFeatures: string[];
}
