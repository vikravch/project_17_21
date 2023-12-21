import BannerGridImages from "../../domain/model/BannerGridImages";
import BannerGridImagesRepository from "../../domain/repository/BannerGridImagesRepository";
import {bannerGridImgTestArr} from "../../../../general/utils/Constants";



let testBannerGridImages:BannerGridImages[] = [];
for (let i = 0; i < 3; i++) {
    testBannerGridImages.push({
        name: bannerGridImgTestArr[i].name,
        category: bannerGridImgTestArr[i].category,
        image: bannerGridImgTestArr[i].image,
        alt: `Banner grid ${bannerGridImgTestArr[i].category}  image`
    });
}




export default class BannerGridFakeRepository implements BannerGridImagesRepository{
    async getAllBannerGridImages(): Promise<BannerGridImages[]>{
        return await Promise.resolve(testBannerGridImages);
    }


}