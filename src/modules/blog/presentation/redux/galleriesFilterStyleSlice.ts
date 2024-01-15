import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";


export type StyleFilter =
    {
        ourStyle: string
    }
const galleriesFilterStyleSlice = createSlice<StyleFilter,SliceCaseReducers<StyleFilter>>(
    {
        name: 'filterStyle',
        initialState: {
            ourStyle: "all"
        },
        reducers: {
            selectFilter(state, action) {
                state.ourStyle = action.payload;
            }
        }
    });

export default galleriesFilterStyleSlice.reducer;
export const {selectFilter} = galleriesFilterStyleSlice.actions;