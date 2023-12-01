import type WeatherRepository from '../../domain/repository/weather_repository'
import Weather from '../../domain/model/weather'
import * as Api from '../remote/api'

export default class WeatherServerRepository implements WeatherRepository {
  async getWeather (cityName: string): Promise<Weather> {
    return Api.getWeather(cityName)
    //return Promise.resolve(new Weather("Haifa", 20, 3,90));
  }
}
