import {createAsyncThunk} from "@reduxjs/toolkit";
import {useUseCases} from "../../../../general/di/service_locator";
import ArticleClass from "../../domain/model/ArticleClass";

export const getLatestArticlesAsyncAction = createAsyncThunk<ArticleClass[]>(
    'home-page/getLatestArticles',
    async () => {
        const {getLatestArticles} = useUseCases();
        try {
            return await getLatestArticles();
        } catch (error) {
            throw error;
        }
    }
);

