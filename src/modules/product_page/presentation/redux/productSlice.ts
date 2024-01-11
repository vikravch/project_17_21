import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import {getProductAsyncAction} from "./asyncAction";
import {ProductState} from "./types";

const productSlice = createSlice<ProductState,SliceCaseReducers<ProductState>>({
    name: 'product_info',
    initialState: {
        product: undefined,
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            (getProductAsyncAction.pending),
            (state)=>{
                state.product = undefined;
                state.error = 'Загрузка';
            }
        ).addCase(
            (getProductAsyncAction.rejected),
            (state, action) => {
                state.error = action.error.message as string;
            }
        ).addCase(
            (getProductAsyncAction.fulfilled),
            (state, action) => {
                state.product = action.payload;
            }
        )
    }
});

export default productSlice.reducer;