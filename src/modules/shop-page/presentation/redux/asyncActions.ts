import {createAsyncThunk} from '@reduxjs/toolkit';
import {useUseCases} from "../../../../general/di/service_locator";
import Product from "../../domain/model/product";
import {RequestProducts, RequestSearchProducts, RequestShopProducts} from "./types";
import Category from "../../domain/model/category";
import Sort from "../../domain/model/sort";
import Price from "../../domain/model/price";

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

export const getProductsAsyncAction = createAsyncThunk<Product[], RequestShopProducts | RequestSearchProducts>(
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

export const getAllPricesAsyncAction = createAsyncThunk<Price[]>(
    'shop-page/getAllPrices',
    async () => {
        const {getAllPrices} = useUseCases();
        try{
            return await getAllPrices();
        } catch (error) {
            throw error;
        }
    }
);

export const getAllSortingAsyncAction = createAsyncThunk<Sort[]>(
    'shop-page/getAllSorting',
    async () => {
        const {getAllSorting} = useUseCases();
        try{
            return await getAllSorting();
        } catch (error) {
            throw error;
        }
    }
);