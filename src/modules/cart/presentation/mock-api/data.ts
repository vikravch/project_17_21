import blackChair from "../../../../images/black_chair.png";
import redChair from "../../../../images/red_chair.png";
import armChair from "../../../../images/armchair.png";
import basket from "../../../../images/basket.png";
import lamp from "../../../../images/lamp.png";
import lamp2 from "../../../../images/lamp2.png";
import lamp3 from "../../../../images/lamp3.png";
import pillow from "../../../../images/pillow.png";
import sideTable from "../../../../images/side-table.png";
import {IBonus, TItem, TOption, TOrder} from "../types";



export const data: TItem[] = [
  {
    id: "1",
    name: "Tray Table",
    color: "Black",
    price: 19.00,
    picture: blackChair,
    amount: 1
  },
  {
    id: "2",
    name: "Tray Table",
    color: "Red",
    price: 19.00,
    picture: redChair,
    amount: 1
  },
  {
    id: "3",
    name: "Luxury Sofa",
    color: "Gray",
    price: 299.00,
    picture: armChair,
    amount: 1
  },
  {
    id: "4",
    name: "Bamboo Basket",
    color: "Straw",
    price: 9.99,
    picture: basket,
    amount: 1
  },
  {
    id: "5",
    name: "Table Lamp",
    color: "Gold",
    price: 39.00,
    picture: lamp,
    amount: 1
  },
  {
    id: "6",
    name: "Lamp",
    color: "White/Wood",
    price: 39.00,
    picture: lamp2,
    amount: 1
  },
  {
    id: "7",
    name: "Table Lamp",
    color: "White/Gold",
    price: 19.00,
    picture: lamp3,
    amount: 1
  },
  {
    id: "8",
    name: "Light Beige Pillow",
    color: "Beige",
    price: 3.99,
    picture: pillow,
    amount: 1
  },
  {
    id: "9",
    name: "White Drawer unit",
    color: "White",
    price: 89.9,
    picture: sideTable,
    amount: 1
  },
]

export const mockOrder: TOrder = {
  orderNumber: "#0123_45678",
  items: [
    {
      id: "3",
      name: "Luxury Sofa",
      color: "Gray",
      price: 299.00,
      picture: armChair,
      amount: 1,
      subtotal: 299.00
    },
      {
        id: "4",
        name: "Bamboo Basket",
        color: "Straw",
        price: 9.99,
        picture: basket,
        amount: 1,
        subtotal: 9.99
      },
    {
      id: "2",
      name: "Tray Table",
      color: "Red",
      price: 19.00,
      picture: redChair,
      amount: 1,
      subtotal: 19.00
    },
    {
      id: "9",
      name: "White Drawer unit",
      color: "White",
      price: 89.99,
      picture: sideTable,
      amount: 1,
      subtotal: 89.99
    },
    {
      id: "7",
      name: "Table Lamp",
      color: "White/Gold",
      price: 19.00,
      picture: lamp3,
      amount: 1,
      subtotal: 19.00
    },
    ],
  date: "October 19, 2023",
  payment_method: "Credit Card",
  total_price: "???",
  discount: "$25.00",

}
export const options:TOption[] = [
  {
    value: 'Israel',
    label: 'Israel'
  },
  {
    value: 'USA',
    label: 'USA'
  },
  {
    value: 'France',
    label: 'France'
  },
  {
    value: 'Ireland',
    label: 'Ireland'
  },
  {
    value: 'Portugal',
    label: 'Portugal'
  }
]
export const codes:IBonus =
  {
    BONUS25: '-$25.00',
    BONUS10: '-$10.00',
    BONUS5: '-$5.00'
  }

