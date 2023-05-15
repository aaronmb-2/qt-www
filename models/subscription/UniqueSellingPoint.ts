import { IUniqueSellingPoint } from "./IUniqueSellingPoint";
import { DataUniqueSellingPoint } from "./DataUniqueSellingPoint";
import { BaseModel } from "../base/BaseModel";

// eslint-disable-next-line no-use-before-define
export class UniqueSellingPoint extends BaseModel<UniqueSellingPoint> implements IUniqueSellingPoint {
  /**
   * Class that acts like an object, which contains all the information regarding a Unique Selling Point (USP).
   *
   * @remarks
   * This class is a so-called 'model', which purpose is to represent the data for a Unique Selling Point.
   * A USP is related to a Product, containing information regarding the USPs for a Product.
   * The UniqueSellingPoint extends the BaseModel and implements an interface called IUniqueSellingPoint.
   *
   * @param DataUniqueSellingPoint - That contains the following: id & description
   * @returns The implemented model of a UniqueSellingPoint which can be used throughout the codebase in order to represent Products USPs.
   *
   */
  description: string;

  constructor(data: DataUniqueSellingPoint) {
    super(data);
    this.description = data.description;
  }
}