import {createAsyncThunk} from "@reduxjs/toolkit";
import {useUseCases} from "../../../../di/service_locator";


export const sendEmailAsyncAction = createAsyncThunk<string, string>(
    'Newsletter-subscribe-section/sendEmail',
    async (email)=>{
        const{sendEmail} = useUseCases();
        try{
            return await sendEmail(email);
        }catch (e){
            throw e;
        }
    }
);