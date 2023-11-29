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