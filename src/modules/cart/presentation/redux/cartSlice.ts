import {createSlice} from "@reduxjs/toolkit";
import {TItem} from "../types";
import {mockOrder} from "../mock-api/data";

export interface IState {
  items: TItem[]
}
export const initialState: IState = {
  items: mockOrder.items,
}
const cartSlice = createSlice(
  {
  name: 'cart',
  initialState,
    reducers: {
    addItemCart: (state, action) => {
      state.items = [...state.items, ...action.payload]
    },
    deleteItemCart: (state, action) => {
      state.items = state.items.filter((el) => el.id !== action.payload)
    }
    },
});
export const {addItemCart, deleteItemCart} = cartSlice.actions;
export default cartSlice.reducer;


// const addToCart = () => {
//     console.log('hello')
//     const item = {
//         id: product.id,
//         color: 'red',
//         name: product.name,
//         picture: product.image,
//         price: product.actualPrice,
//         quantity: 1
//     }
//     dispatch(addItemCart(item))
// }