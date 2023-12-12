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
    actualPrice: 19.00,
    image: blackChair,
    quantity: 1,
    fullPrice: 0,
    sale: 0,
    isNew: false,
    rating: 0,
    description: '',
    amount: 0
  },
  {
    id: "2",
    name: "Tray Table",
    color: "Red",
    actualPrice: 19.00,
    image: redChair,
    quantity: 1,
    fullPrice: 0,
    sale: 0,
    isNew: false,
    rating: 0,
    description: '',
    amount: 0
  },
  {
    id: "3",
    name: "Luxury Sofa",
    color: "Gray",
    actualPrice: 299.00,
    image: armChair,
    quantity: 1,
    fullPrice: 0,
    sale: 0,
    isNew: false,
    rating: 0,
    description: '',
    amount: 0
  },
  {
    id: "4",
    name: "Bamboo Basket",
    color: "Straw",
    actualPrice: 9.99,
    image: basket,
    quantity: 1,
    fullPrice: 0,
    sale: 0,
    isNew: false,
    rating: 0,
    description: '',
    amount: 0
  },
  {
    id: "5",
    name: "Table Lamp",
    color: "Gold",
    actualPrice: 39.00,
    image: lamp,
    quantity: 1,
    fullPrice: 0,
    sale: 0,
    isNew: false,
    rating: 0,
    description: '',
    amount: 0
  },
  {
    id: "6",
    name: "Lamp",
    color: "White/Wood",
    actualPrice: 39.00,
    image: lamp2,
    quantity: 1,
    fullPrice: 0,
    sale: 0,
    isNew: false,
    rating: 0,
    description: '',
    amount: 0
  },
  {
    id: "7",
    name: "Table Lamp",
    color: "White/Gold",
    actualPrice: 19.00,
    image: lamp3,
    quantity: 1,
    fullPrice: 0,
    sale: 0,
    isNew: false,
    rating: 0,
    description: '',
    amount: 0
  },
  {
    id: "8",
    name: "Light Beige Pillow",
    color: "Beige",
    actualPrice: 3.99,
    image: pillow,
    quantity: 1,
    fullPrice: 0,
    sale: 0,
    isNew: false,
    rating: 0,
    description: '',
    amount: 0
  },
  {
    id: "9",
    name: "White Drawer unit",
    color: "White",
    actualPrice: 89.9,
    image: sideTable,
    quantity: 1,
    fullPrice: 0,
    sale: 0,
    isNew: false,
    rating: 0,
    description: '',
    amount: 0
  },
]

export const mockOrder: TOrder = {
  orderNumber: "#0123_45678",
  items: [
    {
      id: "3",
      name: "Luxury Sofa",
      color: "Gray",
      actualPrice: 299.00,
      image: armChair,
      quantity: 1,
      subtotal: 299.00,
      fullPrice: 0,
      sale: 0,
      isNew: false,
      rating: 0,
      description: '',
      amount: 0
    },
      {
        id: "4",
        name: "Bamboo Basket",
        color: "Straw",
        actualPrice: 9.99,
        image: basket,
        quantity: 1,
        subtotal: 9.99,
        fullPrice: 0,
        sale: 0,
        isNew: false,
        rating: 0,
        description: '',
        amount: 0
      },
    {
      id: "2",
      name: "Tray Table",
      color: "Red",
      actualPrice: 19.00,
      image: redChair,
      quantity: 1,
      subtotal: 19.00,
      fullPrice: 0,
      sale: 0,
      isNew: false,
      rating: 0,
      description: '',
      amount: 0
    },
    {
      id: "9",
      name: "White Drawer unit",
      color: "White",
      actualPrice: 89.99,
      image: sideTable,
      quantity: 1,
      subtotal: 89.99,
      fullPrice: 0,
      sale: 0,
      isNew: false,
      rating: 0,
      description: '',
      amount: 0
    },
    {
      id: "7",
      name: "Table Lamp",
      color: "White/Gold",
      actualPrice: 19.00,
      image: lamp3,
      quantity: 1,
      subtotal: 19.00,
      fullPrice: 0,
      sale: 0,
      isNew: false,
      rating: 0,
      description: '',
      amount: 0
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

