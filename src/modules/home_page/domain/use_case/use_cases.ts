import SliderImages from "../model/sliderImages";
import BannerGridImages from "../model/BannerGridImages";
import ArticleClass from "../model/ArticleClass";

export type SliderImagesUseCases = {
    getAllSliderImages: () => Promise<SliderImages[]>
}

export type BannerGridImagesUseCases = {
    getAllBannerGridImages: () => Promise<BannerGridImages[]>
}

export type ArticleUseCases = {
    getLatestArticles: () => Promise<ArticleClass[]>

}