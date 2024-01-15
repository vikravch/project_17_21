import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";


export type sortArt =
    {
        sortType: string
    }
const articleSortSlice = createSlice<sortArt,SliceCaseReducers<sortArt>>(
    {
        name: 'articleSort',
        initialState: {
            sortType: ''
        },
        reducers: {
            sortType(state, action) {
                state.sortType = action.payload;
            }
        }
    });

export default articleSortSlice.reducer;
export const {sortType} = articleSortSlice.actions;