import {createAsyncThunk} from '@reduxjs/toolkit';
import {useUseCases} from "../../../../general/di/service_locator";
import Product from "../../domain/model/product";

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