import SliderImages from "../../domain/model/sliderImages";
import BannerGridImages from "../../domain/model/bannerGridImages";

export type SliderImagesState = {
    sliderImages?: SliderImages[],
    error: string
}

export type BannerGridImagesState = {
    bannerGridImages?: BannerGridImages[],
    error: string
}