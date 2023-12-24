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
  image: string;
  actualPrice: number;
  fullPrice: number;
  sale: number;
  description: string;
  isNew: boolean;
  rating: number;
  color: string;
  amount: number;
  subtotal?: number
  quantity: number;
}
// public readonly id: string,
//   public readonly name: string,
//   public readonly image: string,
//   public readonly actualPrice: number | null,
//   public readonly fullPrice: number,
//   public readonly sale: number,
//   public readonly description: string,
//   public readonly isNew: boolean,
//   public readonly rating: number,
//   public readonly color: string,
//   public readonly amount: number,
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