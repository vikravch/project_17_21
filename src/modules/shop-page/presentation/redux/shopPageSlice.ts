import {ShopPageState} from "./types";
import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import {getAllCategoriesAsyncAction, getAllProductsAsyncAction, getProductsAsyncAction} from "./asyncActions";

const shopPageSlice = createSlice<ShopPageState, SliceCaseReducers<ShopPageState>>(
    {
        name: 'shopPage',
        initialState: {
            products: [],
            categories: [],
            error: 'Any error'
        },
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(
                (getAllProductsAsyncAction.pending),
                (state) => {
                    state.products = undefined;
                    state.error = 'Загрузка';
                }
                )
                .addCase(
                    (getAllProductsAsyncAction.rejected),
                    (state, action) => {
                        state.error = action.error.message as string;
                    }
                )
                .addCase(
                    (getAllProductsAsyncAction.fulfilled),
                    (state, action) => {
                        state.products = action.payload;
                    }
                )
                .addCase(
                    (getProductsAsyncAction.pending),
                    (state) => {
                        state.error = 'Загрузка';
                    }
                )
                .addCase(
                    (getProductsAsyncAction.rejected),
                    (state, action) => {
                        state.error = action.error.message as string;
                    }
                )
                .addCase(
                    (getProductsAsyncAction.fulfilled),
                    (state, action) => {
                        state.products = state.products?.concat(action.payload);
                    }
                )


                .addCase(getAllCategoriesAsyncAction.pending,
                    (state) => {
                        state.categories = undefined;
                        console.log('PEND')
                        state.error = 'Загрузка';
                    }
                )

                .addCase(getAllCategoriesAsyncAction.rejected,
                    (state, action) => {
                        console.log('REJECT')
                        state.error = action.error.message as string;
                    }
                )
                .addCase(getAllCategoriesAsyncAction.fulfilled,
                    (state, action) => {
                        console.log('fulfilled')
                        state.categories = action.payload;
                    }
                )
        }
    }
);

export default shopPageSlice.reducer;