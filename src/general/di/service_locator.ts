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
import {SliderImagesUseCases} from "../../modules/home_page/domain/use_case/use_cases";
import SliderImagesFakeRepository from "../../modules/home_page/data/repository/sliderImagesFakeRepository";
import GetProducts from "../../modules/shop-page/domain/use_case/getProducts";
import FilteringFakeRepository from "../../modules/shop-page/data/repository/filteringFakeRepository";
import {FilteringUseCases} from '../../modules/shop-page/domain/use_case/use_cases';
import GetAllCategories from "../../modules/shop-page/domain/use_case/getAllCategories";
import GetAllPrices from "../../modules/shop-page/domain/use_case/getAllPrices";
import GetAllSorting from "../../modules/shop-page/domain/use_case/getAllSorting";

// Dependency injection - Service locator
type LocatorRepository = {
  weatherRepository: WeatherRepository
  cacheRepository: CacheRepository
  productsFakeRepository: ProductsRepository
  sliderImagesFakeRepository: SliderImagesFakeRepository
  filteringFakeRepository: FilteringFakeRepository
}
type LocatorUseCases = WeatherUseCases & ProductsUseCases & SliderImagesUseCases & FilteringUseCases

let locatorRepository: LocatorRepository

export const initLocatorRepository = () => {
  locatorRepository = {
    weatherRepository: new WeatherServerRepository(),
    cacheRepository: new CacheLocalStoreRepository(),
    productsFakeRepository: new ProductsFakeRepository(),
    sliderImagesFakeRepository: new SliderImagesFakeRepository(),
    filteringFakeRepository: new FilteringFakeRepository()
  }
}

export function useUseCases():LocatorUseCases{
  return {
    getWeather: GetWeather(
        locatorRepository.weatherRepository, locatorRepository.cacheRepository
    ),
    getAllProducts: GetAllProducts(locatorRepository.productsFakeRepository),
    getAllSliderImages: GetAllSliderImages(locatorRepository.sliderImagesFakeRepository),
    getProducts: GetProducts(locatorRepository.productsFakeRepository),
    getAllCategories: GetAllCategories(locatorRepository.filteringFakeRepository),
    getAllPrices: GetAllPrices(locatorRepository.filteringFakeRepository),
    getAllSorting: GetAllSorting(locatorRepository.filteringFakeRepository),
  }
}
