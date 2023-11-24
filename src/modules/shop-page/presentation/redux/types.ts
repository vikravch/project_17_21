import {Product} from "../../domain/model/product";

export type ShopPageState = {
  products?: Product[],
  error: string
}
export type Columns = {
  countDesktop: 4 | 3 | 2,
  countMobile: 2 | 1
}
