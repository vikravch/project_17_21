import sofa from "../../images/sofa.webp"
import trayTable from "../../images/trayTable.webp"
import bambooBasket from "../../images/bambooBasket.webp"
import pillow from "../../images/pillow.webp"
import {TBillingAddress, TItemOrder, TItemWishList, TShippingAddress} from "../../redux/types";

export const dataBillingAddress:TBillingAddress = {
            name: 'Sofia Havertz',
            phone: '+1 23445 6777',
            address: '345 Long Island, NewYork, United States'
}

export const dataShippingAddress: TShippingAddress = {
        name: 'Sofia Havertz',
        phone: '+1 23445 6777',
        address: '345 Long Island, NewYork, United States'
}


export const dataOrders: TItemOrder[] = [
    {
        id: 3456_768,
        dateOrder: "October 17, 2023",
        status: "Delivered",
        price: 1234
    },
    {
        id: 3456_768,
        dateOrder: "October 11, 2023",
        status: "Delivered",
        price: 345
    },
    {
        id: 3456_768,
        dateOrder: "August 24, 2023",
        status: "Delivered",
        price: 2345
    },
    {
        id: 3456_768,
        dateOrder: "August 12, 2023",
        status: "Delivered",
        price: 845
    },

]
export const dataWishList: TItemWishList[] = [
    {
        id: "1",
        name: "Tray Table",
        color: "Black",
        actualPrice: 9.99,
        image: trayTable,
        quantity: 1,
        fullPrice: 9.99,
        sale: 0,
        isNew: false,
        rating: 0,
        description: '',
        amount: 0
    },
    {
        id: "2",
        name: "Sofa",
        color: "Beige",
        actualPrice: 345,
        image: sofa,
        quantity: 1,
        fullPrice: 345,
        sale: 0,
        isNew: false,
        rating: 0,
        description: '',
        amount: 0
    },

    {
        id: "3",
        name: "Bamboo Basket",
        color: "Beige",
        actualPrice: 8.8,
        image: bambooBasket,
        quantity: 1,
        fullPrice: 8.8,
        sale: 0,
        isNew: false,
        rating: 0,
        description: '',
        amount: 0
    },
    {
        id: "4",
        name: "Pillow",
        color: "Beige",
        actualPrice: 8.8,
        image: pillow,
        quantity: 1,
        fullPrice: 8.8,
        sale: 0,
        isNew: false,
        rating: 0,
        description: '',
        amount: 0
    },

]




