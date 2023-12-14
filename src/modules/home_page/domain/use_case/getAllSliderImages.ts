import SliderImages from "../model/sliderImages";
import SliderImagesFakeRepository from "../../data/repository/sliderImagesFakeRepository";



const GetAllSliderImages = (sliderImagesFakeRepository: SliderImagesFakeRepository) =>
    async (): Promise<SliderImages[]> => {
    try {
        const slideImages = await sliderImagesFakeRepository.getAllSliderImages();
        return slideImages || [];
    } catch (e) {
        throw e;
    }
}

export default GetAllSliderImages;