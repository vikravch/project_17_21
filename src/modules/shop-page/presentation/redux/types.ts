import Product from "../../domain/model/product";
import Price from "../../domain/model/price";
import Category from "../../domain/model/category";
import Sort from "../../domain/model/sort";

export type ShopPageState = {
  products?: Product[],
  categories?: Category[],
  prices?: Price[],
  sort?: Sort[],
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
