import SliderImages from "../../domain/model/sliderImages";
import BannerGridImages from "../../domain/model/BannerGridImages";


export type SliderImagesState = {
    sliderImages?: SliderImages[],
    error: string
}

export type BannerGridImagesState = {
    bannerGridImages?: BannerGridImages[],
    error: string
}

export interface Article {
    id: number;
    img: string;
    title: string;
    text: string;
    date: Date;
}

