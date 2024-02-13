import {
    dataBillingAddress,
    dataOrders, dataShippingAddress,
    dataWishList,

} from "../presentation/mock-api/data";


import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import profilePhoto from '../images/Image.webp'
import {TAccount, TBillingAddress, TShippingAddress} from "./types";

interface UpdateBillingAddressPayload {
    billingAddress: TBillingAddress;
}

interface UpdateShippingAddressPayload {
    shippingAddress: TShippingAddress;
}

const initialState: TAccount = {
    user: {
        firstName: 'Sofia',
        lastName: 'Havertz',
        photo: profilePhoto
    },
    billingAddress:dataBillingAddress,
    shippingAddress:dataShippingAddress,
    wishList: dataWishList,
    orders: dataOrders
};
const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<{ firstName?: string; lastName?: string; displayName?: string}>) => {

            if (action.payload.firstName) state.user.firstName = action.payload.firstName;
            if (action.payload.lastName) state.user.lastName = action.payload.lastName;
            if (action.payload.displayName) state.user.displayName = action.payload.displayName;
        },
        updateBillingAddress: (state, action: PayloadAction<UpdateBillingAddressPayload>) => {
            state.billingAddress = action.payload.billingAddress;
        },
        updateShippingAddress: (state, action: PayloadAction<UpdateShippingAddressPayload>) => {
            state.shippingAddress = action.payload.shippingAddress;
        },
        removeFromWishList: (state, action: PayloadAction<string>) => {
            state.wishList = state.wishList.filter(item => item.id !== action.payload);
        },
    }
});

export const { updateUser, updateBillingAddress,updateShippingAddress, removeFromWishList } = accountSlice.actions;

export default accountSlice.reducer;

