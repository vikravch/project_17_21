import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    showSearchInput: false
};


const openSearchInputSlice = createSlice({
    name:'searchInput',
    initialState,
    reducers:{
        showSearchInput(state, action:PayloadAction<boolean>){
            state.showSearchInput = action.payload;
        }
    }
});

export  const {showSearchInput} = openSearchInputSlice.actions;
export default openSearchInputSlice.reducer;