import WeatherRepository from "../../modules/weather/domain/repository/weather_repository";
import CacheRepository from "../../modules/weather/domain/repository/cache_repository";
import WeatherServerRepository from "../../modules/weather/data/repository/weather_server_repository";
import CacheLocalStoreRepository from "../../modules/weather/data/repository/cache_local_store_repository";
import {WeatherUseCases} from "../../modules/weather/domain/use_case/use_cases";
import GetWeather from "../../modules/weather/domain/use_case/GetWeather";
import ProductsRepository from "../../modules/shop-page/domain/repository/productsRepository";
import ProductsFakeRepository from "../../modules/shop-page/data/repository/productsFaceRepository";
import {ProductsUseCases} from "../../modules/shop-page/domain/use_case/use_cases";
import GetAllProducts from "../../modules/shop-page/domain/use_case/getAllProducts";

type LocatorRepository = {
  weatherRepository: WeatherRepository
  cacheRepository: CacheRepository
  productsFakeRepository: ProductsRepository
}
type LocatorUseCases = WeatherUseCases & ProductsUseCases

let locatorRepository: LocatorRepository

export const initLocatorRepository = () => {
  locatorRepository = {
    weatherRepository: new WeatherServerRepository(),
    cacheRepository: new CacheLocalStoreRepository(),
    productsFakeRepository: new ProductsFakeRepository()
  }
}

export function useUseCases():LocatorUseCases{
  return {
    getWeather: GetWeather(
        locatorRepository.weatherRepository, locatorRepository.cacheRepository
    ),
    getAllProducts: GetAllProducts(locatorRepository.productsFakeRepository)
  }
}
