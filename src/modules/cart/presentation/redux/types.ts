import CartItem from "../../domain/model/cart-item";

export type cartState = {
  items: CartItem[];
}
export type TGetProductRequest = {
  productId: string
}
export type TGetProductResponse = {
  productId: string,
  productName: string,
  price: number,
  categoryName: string,
  measurements: string,
  color: string,
  amount: number,
  discount: number,
  dateOfferExpires: string,
  rating: number
}