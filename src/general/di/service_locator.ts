import WeatherRepository from "../../modules/weather/domain/repository/weather_repository";
import CacheRepository from "../../modules/weather/domain/repository/cache_repository";
import WeatherServerRepository from "../../modules/weather/data/repository/weather_server_repository";
import CacheLocalStoreRepository from "../../modules/weather/data/repository/cache_local_store_repository";
import {WeatherUseCases} from "../../modules/weather/domain/use_case/use_cases";
import GetWeather from "../../modules/weather/domain/use_case/GetWeather";
import ProductsRepository from "../../modules/shop-page/domain/repository/productsRepository";
import ProductsFakeRepository from "../../modules/shop-page/data/repository/productsFakeRepository";
import {ProductsUseCases} from "../../modules/shop-page/domain/use_case/use_cases";
import GetAllProducts from "../../modules/shop-page/domain/use_case/getAllProducts";
import GetAllSliderImages from "../../modules/home_page/domain/use_case/getAllSliderImages";
import {
  ArticleUseCases,
  BannerGridImagesUseCases,
  SliderImagesUseCases
} from "../../modules/home_page/domain/use_case/use_cases";
import SliderImagesFakeRepository from "../../modules/home_page/data/repository/sliderImagesFakeRepository";
import GetProducts from "../../modules/shop-page/domain/use_case/getProducts";
import BannerGridFakeRepository from "../../modules/home_page/data/repository/bannerGridFakeRepository";
import GetAllBannerGridImages from "../../modules/home_page/domain/use_case/getAllBannerGridImages";
import FilteringFakeRepository from "../../modules/shop-page/data/repository/filteringFakeRepository";
import {FilteringUseCases} from '../../modules/shop-page/domain/use_case/use_cases';
import GetAllCategories from "../../modules/shop-page/domain/use_case/getAllCategories";
import GetAllPrices from "../../modules/shop-page/domain/use_case/getAllPrices";
import GetAllSorting from "../../modules/shop-page/domain/use_case/getAllSorting";
import GetLatestArticles from "../../modules/home_page/domain/use_case/getLatestArticles";
import ArticlesFakeRepository from "../../modules/home_page/data/repository/articlesFakeRepository";
import ArticlesBlogRepository from "../../modules/blog/presentation/domain/repository/articlesBlogRepository";
import ArticlesBlogFakeRepository from "../../modules/blog/presentation/utils/data/articlesBlogFakeRepository";
import GetAllBlogArticles from "../../modules/blog/presentation/domain/use_case/getAllArticles";
import {ArticleBlogUseCases} from "../../modules/blog/presentation/domain/use_case/use_cases";

import {SendEmailUseCases} from "../components/newsletter_subscribe/domain/use_case/use_cases";
import SendEmail from "../components/newsletter_subscribe/domain/use_case/sendEmail";

// Dependency injection - Service locator
type LocatorRepository = {
  weatherRepository: WeatherRepository
  cacheRepository: CacheRepository
  productsFakeRepository: ProductsRepository
  sliderImagesFakeRepository: SliderImagesFakeRepository
  filteringFakeRepository: FilteringFakeRepository
  bannerGridImagesFakeRepository: BannerGridFakeRepository
  articlesFakeRepository: ArticlesFakeRepository
  articleBlogFakeRepository: ArticlesBlogRepository
}

type LocatorUseCases = WeatherUseCases & ProductsUseCases & SliderImagesUseCases & BannerGridImagesUseCases & FilteringUseCases & ArticleUseCases & ArticleBlogUseCases & SendEmailUseCases

let locatorRepository: LocatorRepository

export const initLocatorRepository = () => {
  locatorRepository = {
    weatherRepository: new WeatherServerRepository(),
    cacheRepository: new CacheLocalStoreRepository(),
    productsFakeRepository: new ProductsFakeRepository(),
    sliderImagesFakeRepository: new SliderImagesFakeRepository(),
    bannerGridImagesFakeRepository: new BannerGridFakeRepository(),
    filteringFakeRepository: new FilteringFakeRepository(),
    articlesFakeRepository: new ArticlesFakeRepository(),
    articleBlogFakeRepository: new ArticlesBlogFakeRepository()
  }
}

export function useUseCases():LocatorUseCases{
  return {
    getWeather: GetWeather(
        locatorRepository.weatherRepository, locatorRepository.cacheRepository
    ),
    getAllProducts: GetAllProducts(locatorRepository.productsFakeRepository),
    getAllSliderImages: GetAllSliderImages(locatorRepository.sliderImagesFakeRepository),
    sendEmail: SendEmail(locatorRepository.sliderImagesFakeRepository),
    getAllBannerGridImages: GetAllBannerGridImages(locatorRepository.bannerGridImagesFakeRepository),
    getProducts: GetProducts(locatorRepository.productsFakeRepository),
    getAllCategories: GetAllCategories(locatorRepository.filteringFakeRepository),
    getAllPrices: GetAllPrices(locatorRepository.filteringFakeRepository),
    getAllSorting: GetAllSorting(locatorRepository.filteringFakeRepository),
    getLatestArticles: GetLatestArticles(locatorRepository.articlesFakeRepository),
    getAllBlogArticles: GetAllBlogArticles(locatorRepository.articleBlogFakeRepository)


  }
}