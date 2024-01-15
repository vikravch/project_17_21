import {createAsyncThunk} from "@reduxjs/toolkit";
import {useUseCases} from "../../../../general/di/service_locator";
import Product_Page from "../../domain/model/product_Page";
import Product_images from "../../domain/model/product_images";



export const getProductAsyncAction = createAsyncThunk<Product_Page, string>(
    'product/getProduct',
    async (name, thunkAPI) => {
        const {getProduct} = useUseCases();

        try {
            const response = await getProduct(name);
            return response;
        } catch (error){
            return thunkAPI.rejectWithValue(error);
        }

    }
)


export const getProductImagesAsyncAction = createAsyncThunk<Product_images, string>(
    'product/getProductImages',
    async (name,thunkAPI)=>{
        const {getProductImages} = useUseCases();

        try{
            const response = await getProductImages(name);
            return response;
        }catch (error){
            return thunkAPI.rejectWithValue(error);
        }
    }
)