import BannerGridImages from "../model/BannerGridImages";


export default interface BannerGridImagesRepository {
    getAllBannerGridImages: () => Promise<BannerGridImages[]>
}