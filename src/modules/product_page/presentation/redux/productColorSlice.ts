import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";


type Color= {
    color: string | undefined
}

const productColorSlice = createSlice<Color,SliceCaseReducers<Color>>({
    name: 'productColor',
    initialState: {
        color: undefined
    },
    reducers:{
        setColor(state,action){
            state.color = action.payload;
        }
    }
});


export default productColorSlice.reducer;
export const {setColor} = productColorSlice.actions;