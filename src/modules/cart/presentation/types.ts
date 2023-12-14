export type TUserOrderInfo = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string
  street: string;
  country: string;
  city: string;
  state?: string;
  zipCode?: string;
  payment_method?: string;
  cardNumber?: string
  expDate?: string
  cvc?: string
}

export type TOption = {
value: string;
label: string;
}
export type TItem = {
  id: string;
  name: string;
  color: string;
  price: number;
  subtotal?: number
  picture: string;
  amount: number;

}
export type TOrder = {
  orderNumber: string;
  items: TItem[];
  date: string;
  payment_method: string;
  total_price: string;
  discount: string;
}
export interface IBonus {
  [name: string]: string,
}