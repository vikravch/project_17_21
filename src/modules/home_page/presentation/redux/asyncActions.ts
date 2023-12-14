import {createAsyncThunk} from "@reduxjs/toolkit";
import SliderImages from "../../domain/model/sliderImages";
import {useUseCases} from "../../../../general/di/service_locator";

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
