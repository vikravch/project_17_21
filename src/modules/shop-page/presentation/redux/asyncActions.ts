import {createAsyncThunk} from '@reduxjs/toolkit';
import {useUseCases} from "../../../../general/di/service_locator";
import ProductForGalleries from "../../domain/model/productForGalleries";
import RequestProducts from "../../domain/model/requestProducts";

export const getAllProductsAsyncAction = createAsyncThunk<ProductForGalleries[]>(
    'shop-page/getAllProducts',
    async () => {
        const {getAllProducts} = useUseCases();
        try {
            return await getAllProducts();
        } catch (error) {
            throw error;
        }
    }
);

export const getProductsAsyncAction = createAsyncThunk<ProductForGalleries[], string>(
    'shop-page/getProducts',
    async (requestObject: RequestProducts, thunkAPI) => {
        const {getProducts} = useUseCases();
        try {
            return await getProducts(requestObject);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);