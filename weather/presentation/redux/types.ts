import Weather from "../../domain/model/weather";

export type WeatherState = {
  weather?: Weather,
  error: string
}
