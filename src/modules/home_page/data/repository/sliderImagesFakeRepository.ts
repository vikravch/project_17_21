import {sliderImgTestArr} from "../../../../general/utils/Constants";
import SliderImagesRepository from "../../domain/repository/sliderImagesRepository";
import SliderImages from "../../domain/model/sliderImages";



let testSliderImages:SliderImages[] = [];
for (let i = 0; i < 4; i++) {
    testSliderImages.push({
        name: `TestImage${i}`,
        image: sliderImgTestArr[i],
        alt: 'Commercial image'
    });
}
// let testEmail:string = 'adc123@gmail.com';




export default class SliderImagesFakeRepository implements SliderImagesRepository{
    async getAllSliderImages(): Promise<SliderImages[]>{
        return await Promise.resolve(testSliderImages);
    }

    async sendEmail(email:string): Promise<string>{
        return await Promise.resolve(email);
    }

}