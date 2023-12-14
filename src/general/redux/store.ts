import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import logger from 'redux-logger'
import weatherReducer from '../../modules/weather/presentation/redux/weatherSlice';
import shopPageReducer from '../../modules/shop-page/presentation/redux/shopPageSlice';
import galleriesStyleReducer from '../../modules/shop-page/presentation/redux/galleriesStyleSlice';
import flyMenu from './slices/openFlyMenuSlice'
import changePictureReducer from '../../modules/home_page/presentation/redux/changePictureSlice';
import getAllPicturesReducer from '../../modules/home_page/presentation/redux/getSliderImagesSlice';
export const store = configureStore(
    {
        reducer: {
            weather: weatherReducer,
            shopPage: shopPageReducer,
            galleriesStyle: galleriesStyleReducer,
            flyMenu: flyMenu,
            changePicture: changePictureReducer,
            sliderImagesGallery: getAllPicturesReducer
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
