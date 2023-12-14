import SliderImages from "../model/sliderImages";


export type SliderImagesUseCases = {
    getAllSliderImages: () => Promise<SliderImages[]>
}