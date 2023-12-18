import sofa from "../../images/sofa.webp"
import trayTable from "../../images/trayTable.webp"
import bambooBasket from "../../images/bambooBasket.webp"
import pillow from "../../images/pillow.webp"

export type TUserProfile = {
    firstName: string;
    lastName: string;
    avatarUrl: string;
}
export type TAddress={
    firstName: string
    lastName: string
    phoneNumber: string
    address: string
    picture:string
}
export type TItemWishList={
    id:number
    name:string
    color:string
    price: string;
    picture: string;
}
export type TItemOrder={
    id: number
    dateOrder: string
    status:string
    price: number
}

export const dataOrders: TItemOrder[]=[
    {
        id: 3456_768,
        dateOrder: "October 17, 2023",
        status:"Delivered",
        price: 1234
    },
    {
        id: 3456_768,
        dateOrder: "October 11, 2023",
        status:"Delivered",
        price: 345
    },
    {
        id: 3456_768,
        dateOrder: "August 24, 2023",
        status:"Delivered",
        price: 2345
    },
    {
        id: 3456_768,
        dateOrder: "August 12, 2023",
        status:"Delivered",
        price: 845
    },

]
export const dataWishList:TItemWishList[]=[
    {
        id:1,
        name:"Tray Table",
        color:"Black",
        price:"$19.19",
        picture: trayTable
    },
    {
        id:2,
        name:"Sofa",
        color:"Beige",
        price:"$345",
        picture: sofa
    },
    {
        id:3,
        name:"Bamboo Basket",
        color:"Beige",
        price:"$8.80",
        picture: bambooBasket
    },
    {
        id:4,
        name:"Pillow",
        color:"Beige",
        price:"$8.80",
        picture: pillow
    }
]



