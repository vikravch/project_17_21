import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import {SendEmailState} from "./types";
import {sendEmailAsyncAction} from "./asyncActions";


const sendEmailsSlice = createSlice<SendEmailState, SliceCaseReducers<SendEmailState>>({
    name: 'sendEmail',
    initialState: {
        sendEmailResult: false,
        error: 'Any error'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase((sendEmailAsyncAction.pending),
                (state) => {
                    state.error = 'Loading...';
                }
            )
            .addCase((sendEmailAsyncAction.rejected),
                (state, action) => {
                    state.sendEmailResult = true;
                    state.error = action.error.message as string;
                }
            )
            .addCase((sendEmailAsyncAction.fulfilled),
                (state) => {
                    state.sendEmailResult = true;
                    state.error = 'No error';
                }
            )

    }
});


export default sendEmailsSlice.reducer;