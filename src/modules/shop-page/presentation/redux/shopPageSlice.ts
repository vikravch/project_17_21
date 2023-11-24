import {ShopPageState} from "./types";
import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import {getAllProductsAsyncAction} from "./asyncActions";

const shopPageSlice = createSlice<ShopPageState, SliceCaseReducers<ShopPageState>>(
    {
        name: 'shopPage',
        initialState: {
            products: [],
            error: 'Any error'
        },
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(
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
        }
    }
);

export default shopPageSlice.reducer;