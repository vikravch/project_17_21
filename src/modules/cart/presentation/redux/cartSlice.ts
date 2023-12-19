import {createSlice} from "@reduxjs/toolkit";
import { TItem} from "../types";
import {shippingOptions} from "../../utils";
import {useAppDispatch} from "../../../../general/redux/hooks";

export interface IState {
  items: TItem[]
  totalPrice: number
  subtotalPrice: number
  shipping: string
}
export const initialState: IState = {
  items: [],
  totalPrice: 0,
  subtotalPrice: 0,
  shipping: 'Free'
}
const calculateTotalPrice = (shippingOption: string, currentTotalPrice: number, currentSubtotalPrice: number) => {
  switch(shippingOption) {
    case 'Free': {
      currentTotalPrice = currentSubtotalPrice;
      return currentTotalPrice;
    }
    case 'Express': {
      currentTotalPrice = currentSubtotalPrice;
      return (currentTotalPrice + shippingOptions.express);
    }
    case 'Pick Up': {
      currentTotalPrice = currentSubtotalPrice;
      return +(currentTotalPrice / 100 * shippingOptions.pick + currentTotalPrice).toFixed(2);
    }
    default:
      return currentTotalPrice;
  }
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
          state.totalPrice = calculateTotalPrice(state.shipping, state.totalPrice, state.subtotalPrice);
        } else {
          state.items = [...state.items, itemForCart];
          state.totalPrice = state.totalPrice + action.payload.product.actualPrice
          state.subtotalPrice = state.subtotalPrice + action.payload.product.actualPrice
          state.totalPrice = calculateTotalPrice(state.shipping, state.totalPrice, state.subtotalPrice);
        }
      },
      deleteItemCart: (state, action) => {
        const elementToDelete = state.items.find(el => el.id === action.payload);
        if(elementToDelete) {
          const totalToSubtract = elementToDelete.subtotal;
          state.items = state.items.filter((el) => el.id !== action.payload);
          state.totalPrice = state.totalPrice - totalToSubtract!
          state.subtotalPrice = state.subtotalPrice - totalToSubtract!;
          state.totalPrice = calculateTotalPrice(state.shipping, state.totalPrice, state.subtotalPrice);
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
          state.totalPrice = calculateTotalPrice(state.shipping, state.totalPrice, state.subtotalPrice);
        }
      },
      decreaseAmount: (state, action) => {
        const index = state.items.findIndex(el => el.id === action.payload);
        if(state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
          state.items[index].subtotal = +(state.items[index].quantity * state.items[index].actualPrice).toFixed(2);
          state.totalPrice = state.totalPrice - state.items[index].actualPrice;
          state.subtotalPrice = state.subtotalPrice - state.items[index].actualPrice;
          state.totalPrice = calculateTotalPrice(state.shipping, state.totalPrice, state.subtotalPrice);
        }
      },
      setShipping: (state, action) => {
        state.shipping = action.payload;
        state.totalPrice = calculateTotalPrice(action.payload, state.totalPrice, state.subtotalPrice);
      }
    },
  });
export const {addItemCart, deleteItemCart, increaseAmount, decreaseAmount, setShipping} = cartSlice.actions;
export default cartSlice.reducer;