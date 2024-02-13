export type FormDataAccount = {
    firstName?: string;
    lastName?: string;
    displayName?: string;
    resetDisplayName:boolean
    email?: string;
    oldPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
};
export type TItemWishList = {
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
export type TItemOrder = {
    id: number
    dateOrder: string
    status: string
    price: number
}
export type TBillingAddress= {
    name: string
    phone:string
    address:string
}
export type TShippingAddress= {
    name: string
    phone:string
    address:string
}

export type TUser ={
    firstName:string
    lastName:string
    displayName?: string;
    photo: string
}
export type TAccount ={
    user:TUser
    billingAddress: TBillingAddress
    shippingAddress: TShippingAddress
    wishList:TItemWishList[]
    orders:TItemOrder[]
}