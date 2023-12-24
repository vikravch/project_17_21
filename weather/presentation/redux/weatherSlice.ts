import {createSlice, SliceCaseReducers} from '@reduxjs/toolkit';
import {getWeatherAsyncAction} from "./asyncActions";
import {WeatherState} from "./types";

const weatherSlice = createSlice<WeatherState, SliceCaseReducers<WeatherState>>(
  {
    name: 'auth',
    initialState: {
      weather: undefined,
      error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(
        (getWeatherAsyncAction.pending),
        (state) => {
          state.weather = undefined;
          state.error = '';
        }
      )
        .addCase(
          (getWeatherAsyncAction.rejected),
          (state, action) => {
            state.error = action.error.message as string;
          }
        )
        .addCase(
          (getWeatherAsyncAction.fulfilled),
          (state, action) => {
            state.weather = action.payload;
          }
        )
    }
  }
);

export default weatherSlice.reducer;
