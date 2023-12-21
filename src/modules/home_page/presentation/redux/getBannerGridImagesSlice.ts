import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import {BannerGridImagesState} from "./types";
import {getAllBannerGridImagesAsyncAction} from "./asyncActions";
import {bannerGridImgTestArr} from "../../../../general/utils/Constants";


const getBannerGridImagesSlice = createSlice<BannerGridImagesState, SliceCaseReducers<BannerGridImagesState>>({
    name: 'getBannerGridImages',
    initialState: {
        bannerGridImages: [
            {
                name: `TestImage0`,
                category: bannerGridImgTestArr[0].category,
                image: bannerGridImgTestArr[0].image,
                alt: `Banner grid ${bannerGridImgTestArr[0].category}  image`
            },
            {
                name: `TestImage0`,
                category: bannerGridImgTestArr[0].category,
                image: bannerGridImgTestArr[0].image,
                alt: `Banner grid ${bannerGridImgTestArr[0].category}  image`
            },
            {
                name: `TestImage0`,
                category: bannerGridImgTestArr[0].category,
                image: bannerGridImgTestArr[0].image,
                alt: `Banner grid ${bannerGridImgTestArr[0].category}  image`
            },
        ],
        error: "Any error"
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase((getAllBannerGridImagesAsyncAction.pending),
                (state) => {
                    state.bannerGridImages = undefined;
                    state.error = 'Loading...';
                }
            )
            .addCase((getAllBannerGridImagesAsyncAction.rejected),
                (state, action) => {
                    state.error = action.error.message as string;
                }
            )
            .addCase((getAllBannerGridImagesAsyncAction.fulfilled),
                (state, action) => {
                    console.log(action.payload)
                    state.bannerGridImages = action.payload;
                    state.error = 'No error';
                }
            )

    }
});


export default getBannerGridImagesSlice.reducer;