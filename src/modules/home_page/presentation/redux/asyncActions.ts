import {createAsyncThunk} from "@reduxjs/toolkit";
import SliderImages from "../../domain/model/sliderImages";
import {useUseCases} from "../../../../general/di/service_locator";
import BannerGridImages from "../../domain/model/bannerGridImages";


export const getAllSliderImagesAsyncAction = createAsyncThunk<SliderImages[]>(
    'home-page/getAllSliderImages',
    async ()=>{

        const{getAllSliderImages} = useUseCases();
        try{
            return await getAllSliderImages();
        }catch (e){
            throw e;
        }
    }
);

export const getAllBannerGridImagesAsyncAction = createAsyncThunk<BannerGridImages[]>(
    'home-page/getAllBannerGridImages',
    async ()=>{

        const{getAllBannerGridImages} = useUseCases();
        try{
            return await getAllBannerGridImages();
        }catch (e){
            throw e;
        }
    }
);

