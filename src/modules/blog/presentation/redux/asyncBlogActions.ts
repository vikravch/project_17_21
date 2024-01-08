import {createAsyncThunk} from "@reduxjs/toolkit";
import Articles from "../domain/model/articles";
import {useUseCases} from "../../../../general/di/service_locator";


export const getAllArticlesBlogAsync = createAsyncThunk<Articles[]>(
    'blog/getAllBlogArticles',
    async () => {
        const {getAllBlogArticles} = useUseCases();

        try {
            return await getAllBlogArticles();
        }catch (error) {
            throw error;
        }
    }
)