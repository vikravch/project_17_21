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
import GetProducts from "../../modules/shop-page/domain/use_case/getProducts";

import CategoryRepository from '../../modules/shop-page/domain/repository/categoryRepository';
import CategoryFakeRepository from '../../modules/shop-page/data/repository/categoryFakeRepository';
import {CategoriesUseCases} from '../../modules/shop-page/domain/use_case/use_cases';
import GetAllCategories from "../../modules/shop-page/domain/use_case/getAllCategories";
// Dependency injection - Service locator
type LocatorRepository = {
  weatherRepository: WeatherRepository
  cacheRepository: CacheRepository
  productsFakeRepository: ProductsRepository
  categoriesFakeRepository: CategoryRepository
}
type LocatorUseCases = WeatherUseCases & ProductsUseCases & CategoriesUseCases

let locatorRepository: LocatorRepository

export const initLocatorRepository = () => {
  locatorRepository = {
    weatherRepository: new WeatherServerRepository(),
    cacheRepository: new CacheLocalStoreRepository(),
    productsFakeRepository: new ProductsFakeRepository(),
    categoriesFakeRepository: new CategoryFakeRepository()
  }
}

export function useUseCases():LocatorUseCases{
  return {
    getWeather: GetWeather(
        locatorRepository.weatherRepository, locatorRepository.cacheRepository
    ),
    getAllProducts: GetAllProducts(locatorRepository.productsFakeRepository),
    getProducts: GetProducts(locatorRepository.productsFakeRepository),
    getAllCategories: GetAllCategories(locatorRepository.categoriesFakeRepository),
  }
}
