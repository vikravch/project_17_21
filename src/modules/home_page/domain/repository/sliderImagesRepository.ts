import SliderImages from "../model/sliderImages";


export default interface SliderImagesRepository {
    getAllSliderImages: () => Promise<SliderImages[]>
}