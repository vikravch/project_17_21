import CartItem from "../model/cart-item";

export default interface CartRepository {
  getCart: () => Promise<CartItem[]>
}