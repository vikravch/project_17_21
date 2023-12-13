import Product from "../../domain/model/product";
import Category from "../../domain/model/category";

export type ShopPageState = {
  products?: Product[],
  categories?: Category[],
  error: string
}
export type Columns = {
  countDesktop: 4 | 3 | 2,
  countMobile: 2 | 1
}
