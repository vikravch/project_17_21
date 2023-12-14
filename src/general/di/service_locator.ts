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
import GetAllFiltering from "../../modules/shop-page/domain/use_case/getAllFiltering";

// Dependency injection - Service locator
type LocatorRepository = {
  weatherRepository: WeatherRepository
  cacheRepository: CacheRepository
  productsFakeRepository: ProductsRepository
  sliderImagesFakeRepository: SliderImagesFakeRepository
}
type LocatorUseCases = WeatherUseCases & ProductsUseCases & SliderImagesUseCases

let locatorRepository: LocatorRepository

export const initLocatorRepository = () => {
  locatorRepository = {
    weatherRepository: new WeatherServerRepository(),
    cacheRepository: new CacheLocalStoreRepository(),
    productsFakeRepository: new ProductsFakeRepository(),
    sliderImagesFakeRepository: new SliderImagesFakeRepository()
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
    getAllFiltering: GetAllFiltering(locatorRepository.productsFakeRepository)
  }
}
