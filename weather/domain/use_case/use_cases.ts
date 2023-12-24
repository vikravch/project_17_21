import Weather from "../model/weather";

export type WeatherUseCases = {
    getWeather: (cityName: string) => Promise<Weather>
}
