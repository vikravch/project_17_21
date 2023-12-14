import {ShopPageState} from "./types";
import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import {getAllFilteringAsyncAction, getAllProductsAsyncAction, getProductsAsyncAction} from "./asyncActions";

const shopPageSlice = createSlice<ShopPageState, SliceCaseReducers<ShopPageState>>(
    {
        name: 'shopPage',
        initialState: {
            products: [],
            categories: [],
            sort: [],
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


                .addCase(getAllFilteringAsyncAction.pending,
                    (state) => {
                        state.categories = undefined;
                        state.prices = undefined;
                        state.sort = undefined;
                        state.error = 'Загрузка';
                    }
                )

                .addCase(getAllFilteringAsyncAction.rejected,
                    (state, action) => {
                        state.error = action.error.message as string;
                    }
                )
                .addCase(getAllFilteringAsyncAction.fulfilled,
                    (state, action) => {
                        state.categories = action.payload.categories;
                        state.prices = action.payload.prices;
                        state.sort = action.payload.sorting;
                    }
                )
        }
    }
);

export default shopPageSlice.reducer;