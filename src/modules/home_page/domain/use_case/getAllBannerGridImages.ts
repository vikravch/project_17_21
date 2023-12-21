import BannerGridImages from "../model/BannerGridImages";
import BannerGridFakeRepository from "../../data/repository/bannerGridFakeRepository";


const GetAllBannerGridImages = (bannerGridImagesFakeRepository: BannerGridFakeRepository) =>
    async (): Promise<BannerGridImages[]> => {
        try {
            const bannerGridImages = await bannerGridImagesFakeRepository.getAllBannerGridImages();
            return bannerGridImages || [];
        } catch (e) {
            throw e;
        }
    }

export default GetAllBannerGridImages;