import Weather from '../model/weather'
import type WeatherRepository from '../repository/weather_repository'
import type CacheRepository from '../repository/cache_repository'

const GetWeather = (
  weatherRepository: WeatherRepository,
  cacheRepository: CacheRepository
) => async (cityName: string): Promise<Weather> => {
  try {
    const res = await weatherRepository.getWeather(cityName)
    if (res === null || res.cityName === undefined) {
      const lastWeather = await cacheRepository.getLastWeather() ?? '{}'
      return Weather.fromJson(lastWeather);
    }
    return res;
  } catch (e) {
    const lastWeather = await cacheRepository.getLastWeather() ?? '{}'
    return Weather.fromJson(lastWeather);
  }
}

export default GetWeather
