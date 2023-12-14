import {createAsyncThunk} from '@reduxjs/toolkit';
import {useUseCases} from "../../../../general/di/service_locator";
import Product from "../../domain/model/product";
import AllFiltering from "../../domain/model/allFiltering";
import {RequestProducts} from "./types";

export const getAllProductsAsyncAction = createAsyncThunk<Product[]>(
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

export const getProductsAsyncAction = createAsyncThunk<Product[], RequestProducts>(
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

export const getAllFilteringAsyncAction = createAsyncThunk<AllFiltering>(
    'shop-page/getAllFiltering',
    async () => {
        const {getAllFiltering} = useUseCases();
        try{
            return await getAllFiltering();
        } catch (error) {
            throw error;
        }
    }
);