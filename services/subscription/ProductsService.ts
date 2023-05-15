import { action, computed, observable, makeAutoObservable } from "mobx";
import { _AsyncData } from "nuxt/dist/app/composables/asyncData";
import { IProductsService } from "./IProductsService";
import { Interval } from "~/models/subscription/Interval";
import { Product } from "~/models/subscription/Product";
import { TypeProduct } from "~/types/subscription/TypeProduct";

export class ProductsService implements IProductsService {
  /**
   * Class that holds all information regarding the Tiers, Pricing & Intervals of the application.
   *
   * @remarks
   * This class is a so-called 'service', which (in this case), provides the overall tier, pricing & intervals information.
   * The ProductsService implements the IProductsService
   *
   */
  static PRODUCTS_URL = `/v1/billing/products/`;

  @observable
  products: Product[] = []

  @observable
  intervals: Interval[] = [
    new Interval({ id: 1, value: "month", label: "pricing.monthly" }),
    new Interval({ id: 2, value: "year", label: "pricing.annually" }),
  ];

  @observable
  interval = this.intervals[0];

  @action.bound
  async fetchProducts(): Promise<void> {
    const config = useRuntimeConfig()
    const { locale }: { locale: any;} = useI18n();

    const response = await useFetch<TypeProduct[]>(
      ProductsService.PRODUCTS_URL,
      {
        baseURL: config.public.apiUrl,
        method: "GET",
        headers: {
          "Accept-Language": locale.value
        },
      }
    );
    if (response.error.value) {
      // handle error
      // return ...
    }
    if (response.data.value) {
      const featuredProducts: Product[] = [];
      const otherProducts: Product[] = [];
  
      response.data.value.forEach((product: TypeProduct) => {
        const newProduct = new Product({
          id: product.id,
          name: product.name,
          featured: product.featured,
          prices: product.prices,
          uniqueSellingPoints: product.unique_selling_points,
        });
  
        if (newProduct.featured) {
          featuredProducts.push(newProduct);
        } else {
          otherProducts.push(newProduct);
        }
      });
  
      const sortedProducts = [
        ...otherProducts.slice(0, Math.ceil(otherProducts.length / 2)),
        ...featuredProducts,
        ...otherProducts.slice(Math.ceil(otherProducts.length / 2)),
      ];
  
      this.clearProducts();
      this.products = sortedProducts;
    }
  }

  @action.bound
  clearProducts(): void {
    this.products = [];
  }

  @computed
  getInterval(): Interval {
    return this.interval;
  }

  @action.bound
  setInterval(interval: Interval): void {
    this.interval = interval;
  }
}

export const productsService = new ProductsService();
makeAutoObservable(productsService, {}, { autoBind: true });
