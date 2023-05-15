import { IInterval } from "~/models/subscription/IInterval";
import { IProduct } from "~/models/subscription/IProduct";

export interface IProductsService {
  products: IProduct[];
  intervals: IInterval[];
  interval: IInterval;

  fetchProducts(): void;
  clearProducts(): void;

  getInterval(): IInterval;
  setInterval(interval: IInterval): void;
}
