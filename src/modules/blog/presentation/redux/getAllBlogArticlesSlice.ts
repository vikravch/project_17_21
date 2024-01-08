import Articles from "../domain/model/articles";
import {createSlice} from "@reduxjs/toolkit";
import {getAllArticlesBlogAsync} from "./asyncBlogActions";

interface BlogArticleState {
    blogArticles: Articles[];
    loading: string;
    error: string |undefined;
}
const initialState: BlogArticleState = {
    blogArticles: [],
    loading: 'Loading...',
    error: "Error..."
};

const allBlogArticlesSlice = createSlice({
    name: 'allBlogArticles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllArticlesBlogAsync.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(getAllArticlesBlogAsync.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.blogArticles = action.payload;
            })
            .addCase(getAllArticlesBlogAsync.rejected, (state, action) => {
                state.loading = 'error';
                state.error = action.error.message;
            });
    },
});

export default allBlogArticlesSlice.reducer;