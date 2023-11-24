import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import {Columns} from "./types";

const galleriesStyleSlice = createSlice<Columns, SliceCaseReducers<Columns>>(
    {
        name: 'galleriesStyle',
        initialState: {
            countMobile: 2,
            countDesktop: 3
        },
        reducers: {
            selectMobileStyle(state, action) {
                state.countMobile = action.payload;
            },
            selectDesktopStyle(state, action) {
                state.countDesktop = action.payload;
            }
        }
    });

export default galleriesStyleSlice.reducer;
export const {selectMobileStyle, selectDesktopStyle} = galleriesStyleSlice.actions;