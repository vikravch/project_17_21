import Weather from "../../domain/model/weather";
import WeatherServerDTO from "../dto/WeatherServerDTO";

const API_KEY = 'c3bd24f13cecf13f96cfdc182bc8d4e8';
export async function getWeather(cityName: string): Promise<Weather> {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);
    if (response.status === 200) {
        const json = await response.json();
        console.log(`WeatherServerRepository: ${json}`)
        return new WeatherServerDTO(json);
    } else {
        throw new Error("Error requesting weather");
    }
}
