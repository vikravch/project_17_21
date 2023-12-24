import type Weather from '../model/weather'

export default interface WeatherRepository {
  getWeather: (cityName: string) => Promise<Weather>
  // Protocol
  // getProduct: (id: string) => Promise<Product>
  // getComments: (id: string) => Promise<Array<ProductComment>>
  // addComment: (id: string, comment: string, token: string) => Promise<Boolean>
}
