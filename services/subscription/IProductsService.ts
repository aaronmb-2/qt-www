import { ParamsBaseApi } from "../base/TypesBaseService";
import { IInterval } from "~/models/subscription/IInterval";
import { IProduct } from "~/models/subscription/IProduct";

export interface IProductsService {
  products: IProduct[];
  intervals: IInterval[];
  interval: IInterval;

  fetchProducts(data: ParamsBaseApi): void;
  clearProducts(): void;

  getInterval(): IInterval;
  setInterval(interval: IInterval): void;
}
