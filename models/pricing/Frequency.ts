import { BaseData } from "../base/BaseData";
import { IFrequency } from "./IFrequency";

import { TypeFrequencie } from "~/types/pricing/TypeFrequency";

// eslint-disable-next-line no-use-before-define
export class Frequency extends BaseData<Frequency> implements IFrequency {
  /**
   * Class that acts like an object, which contains all the information regarding a Frequency.
   *
   * @remarks
   * This class is a so-called 'model', which purpose is to represent the data for a Frequency.
   * A frequency represents the payment period regarding the timeframe of the payments.
   * The Frequency extends the BaseData model and implements an interface called IFrequency.
   *
   * @param TypeFrequencie - That contains the following: id, value & label
   * @returns The implemented model of a Frequency which can be used throughout the codebase in order to represent subscription Frequencies.
   *
   */
  value: string;
  label: string;

  constructor(data: TypeFrequencie) {
    super(data);
    this.value = data.value;
    this.label = data.label;
  }
}
