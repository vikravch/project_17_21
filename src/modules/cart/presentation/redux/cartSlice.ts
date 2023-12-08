import {createSlice} from "@reduxjs/toolkit";
import {TItem} from "../types";
import {mockOrder} from "../mock-api/data";

export interface IState {
  items: TItem[]
  totalPrice: number
  subtotalPrice: number
}
export const initialState: IState = {
  items: [],
  totalPrice: 0,
  subtotalPrice: 0
}
const cartSlice = createSlice(
  {
  name: 'cart',
  initialState,
    reducers: {
    addItemCart: (state, action) => {
      state.items = [...state.items, action.payload];
      state.totalPrice = state.totalPrice + action.payload.price
      state.subtotalPrice = state.subtotalPrice + action.payload.price
    },
    deleteItemCart: (state, action) => {
      state.items = state.items.filter((el) => el.id !== action.payload);
      state.totalPrice = state.totalPrice - action.payload.price
      state.subtotalPrice = state.subtotalPrice - action.payload.price
    },
    increaseAmount: (state, action) => {
      const index = state.items.findIndex(el => el.id === action.payload);
      if(state.items[index].amount >= 0) {
        state.items[index].amount += 1;
        state.items[index].subtotal = +(state.items[index].amount * state.items[index].price).toFixed(2);
        state.totalPrice = state.totalPrice + state.items[index].price;
        state.subtotalPrice = state.subtotalPrice + state.items[index].price;

      }
    },
      decreaseAmount: (state, action) => {
        const index = state.items.findIndex(el => el.id === action.payload);
        if(state.items[index].amount >= 1) {
          state.items[index].amount -= 1;
          state.items[index].subtotal = +(state.items[index].amount * state.items[index].price).toFixed(2);
          state.totalPrice = state.totalPrice - state.items[index].price;
          state.subtotalPrice = state.subtotalPrice - state.items[index].price;
        }
    }
    },
});
export const {addItemCart, deleteItemCart, increaseAmount, decreaseAmount} = cartSlice.actions;
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