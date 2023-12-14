import Product from "../../domain/model/product";
import Price from "../../domain/model/price";
import {CategoryAndSort} from "../../domain/model/interfaces";

export type ShopPageState = {
  products?: Product[],
  categories?: CategoryAndSort[],
  prices?: Price[],
  sort?: CategoryAndSort[],
  error: string
}
export type Columns = {
  countDesktop: 4 | 3 | 2,
  countMobile: 2 | 1
}

export interface RequestProducts {
  filtering: {
    category: number | null,
    price: number | null,
    sorting: number | null,
  }
  page: number
}
