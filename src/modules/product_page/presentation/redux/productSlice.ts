import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import {getProductAsyncAction, getProductImagesAsyncAction} from "./asyncAction";
import {ProductState} from "./types";

const productSlice = createSlice<ProductState,SliceCaseReducers<ProductState>>({
    name: 'product_info',
    initialState: {
        product: undefined,
        productImages: undefined,
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
        ).addCase(
            (getProductImagesAsyncAction.pending),
            (state)=>{
                state.productImages = undefined;
                state.error = 'Загрузка';
            }
        ).addCase(
            (getProductImagesAsyncAction.rejected),
            (state,action)=>{
                state.error = action.error.message as string;
            }
        ).addCase(
            (getProductImagesAsyncAction.fulfilled),
            (state,action)=>{
                state.productImages = action.payload;
            }
        )
    }
});

export default productSlice.reducer;