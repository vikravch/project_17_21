import {createAsyncThunk} from '@reduxjs/toolkit';
import {useUseCases} from "../../../../general/di/service_locator";
import RequestProducts from "../../domain/model/requestProducts";
import Product from "../../domain/model/product";
import Category from '../../domain/model/category';

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

export const getAllCategoriesAsyncAction = createAsyncThunk<Category[]>(
    'shop-page/getAllCategories',
    async () => {
        const {getAllCategories} = useUseCases();
        try{
            return await getAllCategories();
        } catch (error) {
            throw error;
        }
    }
);