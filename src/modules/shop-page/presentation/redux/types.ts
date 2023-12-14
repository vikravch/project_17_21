import Product from "../../domain/model/product";
import Category from "../../domain/model/category";
import Price from "../../domain/model/price";
import Sort from "../../domain/model/sorting";

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
