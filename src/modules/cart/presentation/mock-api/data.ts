import blackChair from "../../../../images/black_chair.png";
import redChair from "../../../../images/red_chair.png";
import armChair from "../../../../images/armchair.png";
import basket from "../../../../images/basket.png";
import lamp from "../../../../images/lamp.png";
import lamp2 from "../../../../images/lamp2.png";
import lamp3 from "../../../../images/lamp3.png";
import pillow from "../../../../images/pillow.png";
import sideTable from "../../../../images/side-table.png";

export type TItem = {
  id: string;
  name: string;
  color: string;
  price: string;
  picture: string;
}
export type TOrder = {
  orderNumber: string;
  items: TItem[];
  date: string;
  payment_method: string;
  total_price: string;
  discount: string

}
export const data: TItem[] = [
  {
    id: "1",
    name: "Tray Table",
    color: "Black",
    price: "$19.00",
    picture: blackChair,
  },
  {
    id: "2",
    name: "Tray Table",
    color: "Red",
    price: "$19.00",
    picture: redChair,
  },
  {
    id: "3",
    name: "Luxury Sofa",
    color: "Gray",
    price: "$299.00",
    picture: armChair,
  },
  {
    id: "4",
    name: "Bamboo Basket",
    color: "Straw",
    price: "$9.99",
    picture: basket,
  },
  {
    id: "5",
    name: "Table Lamp",
    color: "Gold",
    price: "$39.00",
    picture: lamp,
  },
  {
    id: "6",
    name: "Lamp",
    color: "White/Wood",
    price: "$39.00",
    picture: lamp2,
  },
  {
    id: "7",
    name: "Table Lamp",
    color: "White/Gold",
    price: "$19.00",
    picture: lamp3,
  },
  {
    id: "8",
    name: "Light Beige Pillow",
    color: "Beige",
    price: "$3.99",
    picture: pillow,
  },
  {
    id: "9",
    name: "White Drawer unit",
    color: "White",
    price: "$89.99",
    picture: sideTable,
  },
]

export const mockOrder: TOrder = {
  orderNumber: "#0123_45678",
  items: [
    {
      id: "3",
      name: "Luxury Sofa",
      color: "Gray",
      price: "$299.00",
      picture: armChair,
    },
      {
        id: "4",
        name: "Bamboo Basket",
        color: "Straw",
        price: "$9.99",
        picture: basket,
      },
    {
      id: "2",
      name: "Tray Table",
      color: "Red",
      price: "$19.00",
      picture: redChair,
    },
    ],
  date: "October 19, 2023",
  payment_method: "Credit Card",
  total_price: "???",
  discount: "$25.00"
}