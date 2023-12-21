import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import {getAllSliderImagesAsyncAction} from "./asyncActions";
import {SliderImagesState} from "./types";
import {sliderImgTestArr} from "../../../../general/utils/Constants";



const getSliderImagesSlice = createSlice<SliderImagesState, SliceCaseReducers<SliderImagesState>>({
    name: 'getSlideImages',
    initialState: {
        sliderImages: [
            {
                name: `TestImage1`,
                image: sliderImgTestArr[1],
                alt: 'Commercial image'}
        ],
        error: "Any error"
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase((getAllSliderImagesAsyncAction.pending),
                (state) => {
                    state.sliderImages = undefined;
                    state.error = 'Loading...';
                }
            )
            .addCase((getAllSliderImagesAsyncAction.rejected),
                (state, action) => {
                    state.error = action.error.message as string;
                }
            )
            .addCase((getAllSliderImagesAsyncAction.fulfilled),
                (state, action) => {
                    console.log(action.payload)
                    state.sliderImages = action.payload;
                    state.error = 'No error';
                }
            )

    }
});


export default getSliderImagesSlice.reducer;