import {createSlice} from "@reduxjs/toolkit";
import {TItem} from "../types";

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
      const id = action.payload.id;
      const element = state.items.find(el => el.id === id);
      if(element){
        element.quantity += 1;
        element.subtotal! += element.price;
        state.totalPrice = state.totalPrice + element.price
        state.subtotalPrice = state.subtotalPrice + element.price
      } else {
        state.items = [...state.items, action.payload];
        state.totalPrice = state.totalPrice + action.payload.price
        state.subtotalPrice = state.subtotalPrice + action.payload.price
      }
    },
    deleteItemCart: (state, action) => {
      state.items = state.items.filter((el) => el.id !== action.payload);
      state.totalPrice = state.totalPrice - action.payload.price
      state.subtotalPrice = state.subtotalPrice - action.payload.price
    },
    increaseAmount: (state, action) => {
      const index = state.items.findIndex(el => el.id === action.payload);
      if(state.items[index].quantity >= 0) {
        state.items[index].quantity += 1;
        state.items[index].subtotal = +(state.items[index].quantity * state.items[index].price).toFixed(2);
        state.totalPrice = state.totalPrice + state.items[index].price;
        state.subtotalPrice = state.subtotalPrice + state.items[index].price;

      }
    },
      decreaseAmount: (state, action) => {
        const index = state.items.findIndex(el => el.id === action.payload);
        if(state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
          state.items[index].subtotal = +(state.items[index].quantity * state.items[index].price).toFixed(2);
          state.totalPrice = state.totalPrice - state.items[index].price;
          state.subtotalPrice = state.subtotalPrice - state.items[index].price;
        }
    }
    },
});
export const {addItemCart, deleteItemCart, increaseAmount, decreaseAmount} = cartSlice.actions;
export default cartSlice.reducer;

