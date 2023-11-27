import {WeatherState} from "../../modules/weather/presentation/redux/types";
import {Columns, ShopPageState} from "../../modules/shop-page/presentation/redux/types";

export type AppStore = {
    weather: WeatherState
    shopPage: ShopPageState
    galleriesStyle: Columns
}
