import {createAsyncThunk} from "@reduxjs/toolkit";
import Product from "../../../shop-page/domain/model/product";
import {useUseCases} from "../../../../general/di/service_locator";



export const getProductAsyncAction = createAsyncThunk<Product, string>(
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