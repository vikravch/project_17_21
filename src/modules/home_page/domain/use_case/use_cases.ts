import SliderImages from "../model/sliderImages";
import BannerGridImages from "../model/bannerGridImages";


export type SliderImagesUseCases = {
    getAllSliderImages: () => Promise<SliderImages[]>
}

export type BannerGridImagesUseCases = {
    getAllBannerGridImages: () => Promise<BannerGridImages[]>
}