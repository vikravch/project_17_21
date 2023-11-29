import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    showFlyMenu: false
};


const openFlyMenuSlice = createSlice({
    name:'flyMenu',
    initialState,
    reducers:{
        openFlyMenu(state, action:PayloadAction<boolean>){
            state.showFlyMenu = action.payload;
        }
    }
});

export  const {openFlyMenu} = openFlyMenuSlice.actions;
export default openFlyMenuSlice.reducer;