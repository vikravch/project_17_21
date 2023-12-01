import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    pictureIndex: 0
};


const changePictureSlice = createSlice({
    name:'changePicture',
    initialState,
    reducers:{
        changePicture(state, action:PayloadAction<number>){
            state.pictureIndex = action.payload;
        }
    }
});

export  const {changePicture} = changePictureSlice.actions;
export default changePictureSlice.reducer;