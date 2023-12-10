import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import logger from 'redux-logger'
import weatherReducer from '../../modules/weather/presentation/redux/weatherSlice';
import shopPageReducer from '../../modules/shop-page/presentation/redux/shopPageSlice';
import galleriesStyleReducer from '../../modules/shop-page/presentation/redux/galleriesStyleSlice';
import flyMenu from './slices/openFlyMenuSlice'
import changePicture from './slices/changePictureSlice'
import cartSlice from "../../modules/cart/presentation/redux/cartSlice";
import filterAndSortingReducer from "../../modules/shop-page/presentation/redux/filterAndSortingSlice";

export const store = configureStore(
    {
        reducer: {
            weather: weatherReducer,
            shopPage: shopPageReducer,
            galleriesStyle: galleriesStyleReducer,
            filterAndSort: filterAndSortingReducer,
            flyMenu: flyMenu,
            changePicture: changePicture,
            cart: cartSlice,
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
