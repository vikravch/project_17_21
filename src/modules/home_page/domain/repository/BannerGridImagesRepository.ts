import BannerGridImages from "../model/bannerGridImages";


export default interface BannerGridImagesRepository {
    getAllBannerGridImages: () => Promise<BannerGridImages[]>
}