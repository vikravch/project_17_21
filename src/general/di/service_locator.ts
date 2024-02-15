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
import ProductsExpressRepository from "../../modules/shop-page/data/repository/productsExpressRepository";

import Product_infoFakeRepository from "../../modules/product_page/data/repository/product_infoFakeRepository";
import GetProduct from "../../modules/product_page/domain/use_case/getProduct";
import {ProductUseCases} from "../../modules/product_page/domain/use_case/use_cases";
import GetProductImages from "../../modules/product_page/domain/use_case/getProductImages";
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
  productsExpressRepository: ProductsRepository
  sliderImagesFakeRepository: SliderImagesFakeRepository
  filteringFakeRepository: FilteringFakeRepository
  bannerGridImagesFakeRepository: BannerGridFakeRepository
  productInfoFakeRepository: Product_infoFakeRepository
  articleBlogFakeRepository: ArticlesBlogRepository
}

type LocatorUseCases = WeatherUseCases & ProductsUseCases & SliderImagesUseCases & BannerGridImagesUseCases & FilteringUseCases & ProductUseCases & ArticleBlogUseCases & SendEmailUseCases

let locatorRepository: LocatorRepository

export const initLocatorRepository = () => {
  locatorRepository = {
    weatherRepository: new WeatherServerRepository(),
    cacheRepository: new CacheLocalStoreRepository(),
    productsFakeRepository: new ProductsFakeRepository(),
    productsExpressRepository: new ProductsExpressRepository(),
    sliderImagesFakeRepository: new SliderImagesFakeRepository(),
    bannerGridImagesFakeRepository: new BannerGridFakeRepository(),
    filteringFakeRepository: new FilteringFakeRepository(),
    productInfoFakeRepository: new Product_infoFakeRepository(),
    articleBlogFakeRepository: new ArticlesBlogFakeRepository()
  }
}

export function useUseCases():LocatorUseCases{
  return {
    getWeather: GetWeather(
        locatorRepository.weatherRepository, locatorRepository.cacheRepository
    ),
    getProducts: GetProducts(
        locatorRepository.productsFakeRepository, locatorRepository.productsExpressRepository
    ),
    getAllProducts: GetAllProducts(
        locatorRepository.productsFakeRepository, locatorRepository.productsExpressRepository
    ),
    getAllSliderImages: GetAllSliderImages(locatorRepository.sliderImagesFakeRepository),
    sendEmail: SendEmail(locatorRepository.sliderImagesFakeRepository),
    getAllBannerGridImages: GetAllBannerGridImages(locatorRepository.bannerGridImagesFakeRepository),

    getAllCategories: GetAllCategories(locatorRepository.filteringFakeRepository),
    getAllPrices: GetAllPrices(locatorRepository.filteringFakeRepository),
    getAllSorting: GetAllSorting(locatorRepository.filteringFakeRepository),
    getProduct: GetProduct(locatorRepository.productInfoFakeRepository),
    getProductImages: GetProductImages(locatorRepository.productInfoFakeRepository),
    getAllBlogArticles: GetAllBlogArticles(locatorRepository.articleBlogFakeRepository)
  }
}