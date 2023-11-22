import {ShopPageState} from "./types";
import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import {Product} from "../../domain/model/product";
import testImage from './testImage.webp'

let testProducts: Product[] = [];
for (let i = 0; i < 5; i++) {
    testProducts.push({
        id: i,
        name: 'TestProduct',
        image: testImage,
        description: 'Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile.',
        actualPrice: 169.99,
        fullPrice: 199.99,
        sale: 15,
        new: true,
        rating: 4
    });
}

const shopPageSlice = createSlice<ShopPageState, SliceCaseReducers<ShopPageState>>(
    {
        name: 'shopPage',
        initialState: {
            columns: {
                countMobile: 2,
                countDesktop: 3
            },
            products: testProducts,
            error: 'Any error'
        },
        reducers: {
            selectMobileStyle(state, action){
                state.columns.countMobile = action.payload;
            },
            selectDesktopStyle(state, action){
                state.columns.countDesktop = action.payload;
            }
        },
    }
);

export default shopPageSlice.reducer;
export const {selectMobileStyle, selectDesktopStyle} = shopPageSlice.actions;