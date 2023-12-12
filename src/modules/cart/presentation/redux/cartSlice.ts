import {createSlice} from "@reduxjs/toolkit";
import { TItem} from "../types";

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
        const id = action.payload.product.id;
        const element = state.items.find(el => el.id === id);
        const itemForCart = {...action.payload.product, quantity: action.payload.quantity, subtotal: action.payload.product.actualPrice * action.payload.quantity}
        if(element){
          element.quantity += action.payload.quantity;
          element.subtotal! += element.actualPrice;
          state.totalPrice = state.totalPrice + element.actualPrice
          state.subtotalPrice = state.subtotalPrice + element.actualPrice
        } else {
          state.items = [...state.items, itemForCart];
          state.totalPrice = state.totalPrice + action.payload.product.actualPrice
          state.subtotalPrice = state.subtotalPrice + action.payload.product.actualPrice
        }
      },
      deleteItemCart: (state, action) => {
        const elementToDelete = state.items.find(el => el.id === action.payload);
        if(elementToDelete) {
          const totalToSubtract = elementToDelete.subtotal;
          state.items = state.items.filter((el) => el.id !== action.payload);
          state.totalPrice = state.totalPrice - totalToSubtract!
          state.subtotalPrice = state.subtotalPrice - totalToSubtract!;
          if(state.items.length === 0) {
            state.subtotalPrice = 0;
            state.totalPrice = 0;
          }
        }
      },
      increaseAmount: (state, action) => {
        const index = state.items.findIndex(el => el.id === action.payload);
        if(state.items[index].quantity >= 0) {
          state.items[index].quantity += 1;
          state.items[index].subtotal = +(state.items[index].quantity * state.items[index].actualPrice).toFixed(2);
          state.totalPrice = state.totalPrice + state.items[index].actualPrice;
          state.subtotalPrice = state.subtotalPrice + state.items[index].actualPrice;

        }
      },
      decreaseAmount: (state, action) => {
        const index = state.items.findIndex(el => el.id === action.payload);
        if(state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
          state.items[index].subtotal = +(state.items[index].quantity * state.items[index].actualPrice).toFixed(2);
          state.totalPrice = state.totalPrice - state.items[index].actualPrice;
          state.subtotalPrice = state.subtotalPrice - state.items[index].actualPrice;
        }
      }
    },
  });
export const {addItemCart, deleteItemCart, increaseAmount, decreaseAmount} = cartSlice.actions;
export default cartSlice.reducer;