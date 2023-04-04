import { BaseData } from "../base/BaseData";
import { IPrice } from "./IPrice";

import { TypePrice } from "~/types/pricing/TypePrice";

// eslint-disable-next-line no-use-before-define
export class Price extends BaseData<Price> implements IPrice {
  /**
   * Class that acts like an object, which contains all the information regarding a Price.
   *
   * @remarks
   * This class is a so-called 'model', which purpose is to represent the data for a Price.
   * A price is related to a Tier, containing both the monthly and annuall pricing information.
   * The Price extends the BaseData model and implements an interface called IPrice.
   *
   * @param TypePrice - That contains the following: id, monthly & annually
   * @returns The implemented model of a Price which can be used throughout the codebase in order to represent Pricing levels.
   *
   */
  monthly: number;
  annually: number;

  constructor(data: TypePrice) {
    super(data);
    this.monthly = data.monthly;
    this.annually = data.annually;
  }

  getCurrentPrice(period: string): string {
    let price = 0;
    if (period === "monthly") {
      price = this.monthly;
    } else {
      price = this.annually;
    }
    return `$${price}`;
  }

  getMonthlyPrice(): string {
    return `$${this.monthly}`;
  }

  getAnnuallyPrice(): string {
    return `$${this.annually}`;
  }
}
