import { createAsyncThunk } from '@reduxjs/toolkit';
import {useUseCases} from "../../../../general/di/service_locator";
import Weather from "../../domain/model/weather";

export const getWeatherAsyncAction = createAsyncThunk<Weather, string>(
  'weather/getWeather',
  async (name, thunkAPI) => {
      const {getWeather} = useUseCases();
      try {
        const response = await getWeather(name);
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
  }
);
