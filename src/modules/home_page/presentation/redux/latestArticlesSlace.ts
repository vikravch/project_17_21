import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getLatestArticlesAsyncAction } from './articalAsyncActions';
import ArticleClass from "../../domain/model/ArticleClass";

interface LatestArticlesState {
    latestArticles: ArticleClass[];
    loading: string;
    error: string | null | undefined;
}

const initialState: LatestArticlesState = {
    latestArticles: [],
    loading: 'idle',
    error: null,
};

const latestArticlesSlice = createSlice({
    name: 'latestArticles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLatestArticlesAsyncAction.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(getLatestArticlesAsyncAction.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.latestArticles = action.payload;
            })
            .addCase(getLatestArticlesAsyncAction.rejected, (state, action) => {
                state.loading = 'idle';
                state.error = action.error.message;
            });
    },
});

export default latestArticlesSlice.reducer;
