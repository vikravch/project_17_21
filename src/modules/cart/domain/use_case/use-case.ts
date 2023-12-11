import CartItem from "../model/cart-item";

export type CartUseCases = {
  getCart: () => Promise<CartItem[]>
}