import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import logger from 'redux-logger'
import flyMenu from './slices/openFlyMenuSlice'
import changePicture from './slices/changePictureSlice'


export const store = configureStore(
    {
        reducer: {
            flyMenu,changePicture
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
        devTools: process.env.NODE_ENV !== 'production',
    }
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
