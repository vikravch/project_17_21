import sofa from "../../images/sofa.png"
import trayTable from "../../images/trayTable.png"
import bambooBasket from "../../images/bambooBasket.png"
import pillow from "../../images/pillow.png"

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

export const data:TItemWishList[]=[
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



