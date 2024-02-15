import {ShopPageState} from "./types";
import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import {
    getAllCategoriesAsyncAction,
    getAllPricesAsyncAction,
    getAllProductsAsyncAction, getAllSortingAsyncAction,
    getProductsAsyncAction
} from "./asyncActions";

const shopPageSlice = createSlice<ShopPageState, SliceCaseReducers<ShopPageState>>(
    {
        name: 'shopPage',
        initialState: {
            expectedCountOfProducts: 0,
            products: [],
            categories: [],
            prices: [],
            sort: [],
            error: 'Any error'
        },
        reducers: {
            cleanProducts: (state) => {
                state.products = [];
            },
        },
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
                        state.expectedCountOfProducts = action.payload.count;
                        state.products = state.products?.concat(action.payload.products);
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
                        state.expectedCountOfProducts = action.payload.count;
                        if (action.payload.products.length > 0)
                            state.products = state.products?.concat(action.payload.products);
                        else
                            state.error = "We did not find any products matching your request"
                    }
                )
                .addCase(getAllCategoriesAsyncAction.pending,
                    (state) => {
                        state.categories = undefined;
                        state.error = 'Loading...';
                    }
                )
                .addCase(getAllCategoriesAsyncAction.rejected,
                    (state, action) => {
                        state.error = action.error.message as string;
                    }
                )
                .addCase(getAllCategoriesAsyncAction.fulfilled,
                    (state, action) => {
                        state.categories = action.payload;
                    }
                )
                .addCase(getAllPricesAsyncAction.pending,
                    (state) => {
                        state.prices = undefined;
                        state.error = 'Loading...';
                    }
                )
                .addCase(getAllPricesAsyncAction.rejected,
                    (state, action) => {
                        state.error = action.error.message as string;
                    }
                )
                .addCase(getAllPricesAsyncAction.fulfilled,
                    (state, action) => {
                        state.prices = action.payload;
                    }
                )
                .addCase(getAllSortingAsyncAction.pending,
                    (state) => {
                        state.sort = undefined;
                        state.error = 'Loading...';
                    }
                )
                .addCase(getAllSortingAsyncAction.rejected,
                    (state, action) => {
                        state.error = action.error.message as string;
                    }
                )
                .addCase(getAllSortingAsyncAction.fulfilled,
                    (state, action) => {
                        state.sort = action.payload;
                    }
                )
        }
    }
);

export default shopPageSlice.reducer;
export const { cleanProducts } = shopPageSlice.actions;