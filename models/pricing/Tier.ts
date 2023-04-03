import { TypeTier } from "~/types/pricing/TypeTier";

import { BaseData } from "../base/BaseData";
import { IPrice } from "./IPrice";
import { ITier } from "./ITier";

export class Tier extends BaseData<Tier> implements ITier {
    /**
     * Class that acts like an object, which contains all the information regarding a Tier.
     *
     * @remarks
     * This class is a so-called 'model', which purpose is to represent the data for a Tier.
     * A tier is a type of subscription model that a user needs to select (and pay) in order to gain
     * access to the QuantTrade application.
     * The Tier extends the BaseData model and implements an interface called ITier.
     *
     * @param TypeTier - That contains the following: id, name, href, featured, price, mainFeatures
     * @returns The implemented model of a Tier which can be used throughout the codebase in order to represent subscription Tiers.
     *
     */
    name: string;
    href: string;
    featured: boolean;
    price: IPrice;
    mainFeatures: string[];

    constructor(data: TypeTier) {
        super(data);
        this.name = data.name;
        this.href = data.href;
        this.featured = data.featured;
        this.price = data.price;
        this.mainFeatures = data.mainFeatures
    }
}