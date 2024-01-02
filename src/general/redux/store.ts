import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import logger from 'redux-logger'
import weatherReducer from '../../modules/weather/presentation/redux/weatherSlice';
import shopPageReducer from '../../modules/shop-page/presentation/redux/shopPageSlice';
import galleriesStyleReducer from '../../modules/shop-page/presentation/redux/galleriesStyleSlice';
import flyMenu from './slices/openFlyMenuSlice';
import changePictureReducer from '../../modules/home_page/presentation/redux/changePictureSlice';
import getAllSliderPicturesReducer from '../../modules/home_page/presentation/redux/getSliderImagesSlice';
import getAllBannerGridPicturesReducer from '../../modules/home_page/presentation/redux/getBannerGridImagesSlice';
import cartSlice from "../../modules/cart/presentation/redux/cartSlice";
import galleriesFilterStyleSlice from "../../modules/blog/presentation/redux/galleriesFilterStyleSlice";
import articleSlace from "../../modules/home_page/presentation/redux/latestArticlesSlace";
import getAllBlogArticlesSlice from "../../modules/blog/presentation/redux/getAllBlogArticlesSlice";
import articleSortSlice from "../../modules/blog/presentation/redux/articleSortSlice";

export const store = configureStore(
    {
        reducer: {
            weather: weatherReducer,
            shopPage: shopPageReducer,
            galleriesStyle: galleriesStyleReducer,
            flyMenu: flyMenu,
            changePicture: changePictureReducer,
            sliderImagesGallery: getAllSliderPicturesReducer,
            bannerGridImagesGallery: getAllBannerGridPicturesReducer,
            cart: cartSlice,
            blogFilter: galleriesFilterStyleSlice,
            articles: articleSlace,
            getAllBlogArticles: getAllBlogArticlesSlice,
            articleSort: articleSortSlice
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
