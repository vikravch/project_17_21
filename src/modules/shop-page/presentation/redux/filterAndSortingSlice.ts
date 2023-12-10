import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import {priceArray} from "../components/filtres/utils/filterConst";
import RequestProducts from "../../domain/model/requestProducts";

const filterAndSortingSlice = createSlice<RequestProducts, SliceCaseReducers<RequestProducts>>({
    name: 'filterAndSort',
    initialState: {
        category: "All rooms",
        price: priceArray[0].title as string,
        sorting: "Default",
        page: 1
    },
    reducers: {
        setCategory(state, action) {
            console.log('CATEG')
            state.category = action.payload;
        },

        setPrice(state, action) {
            state.price = action.payload;
        },

        setSorting(state, action) {
            state.sorting = action.payload;
        },

        setPage(state, action) {
            state.page = action.payload;
        }
    }

});

export default filterAndSortingSlice.reducer;
export const {setCategory, setPrice, setSorting, setPage} = filterAndSortingSlice.actions;