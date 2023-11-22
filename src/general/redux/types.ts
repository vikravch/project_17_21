import {WeatherState} from "../../modules/weather/presentation/redux/types";
import {ShopPageState} from "../../modules/shop-page/presentation/redux/types";

export type AppStore = {
    weather: WeatherState
    shopPage: ShopPageState
}
