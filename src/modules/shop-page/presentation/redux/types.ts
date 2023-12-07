import ProductForGalleries from "../../domain/model/productForGalleries";

export type ShopPageState = {
  products?: ProductForGalleries[],
  error: string
}
export type Columns = {
  countDesktop: 4 | 3 | 2,
  countMobile: 2 | 1
}
