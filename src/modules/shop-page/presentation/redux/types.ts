import {Columns, Product} from "../../domain/model/product";

export type ShopPageState = {
  products?: Product[],
  columns: Columns,
  error: string
}
