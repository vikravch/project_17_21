import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";


export type IndexArt =
    {
        articleIndex: number
    }
const articleIndexSlice = createSlice<IndexArt,SliceCaseReducers<IndexArt>>(
    {
        name: 'articleIndex',
        initialState: {
            articleIndex: 0
        },
        reducers: {
            getIndex(state, action) {
                state.articleIndex = action.payload;
            }
        }
    });

export default articleIndexSlice.reducer;
export const {getIndex} = articleIndexSlice.actions;