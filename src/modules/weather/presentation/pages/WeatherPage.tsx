import React, {useEffect, useState} from 'react';
import Weather from "../../domain/model/weather";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../../../general/redux/store";
import {AppStore} from "../../../../general/redux/types";
import {getWeatherAsyncAction} from "../redux/asyncActions";

const WeatherPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const weather = useSelector<AppStore, Weather | undefined>(
        state => state.weather.weather
    );

    useEffect(()=>{
        dispatch(getWeatherAsyncAction('Haifa'));
    },[]);

    return (
        <div >
            {(weather!==undefined)?JSON.stringify(weather):<h2 >Loading...</h2>}
        </div>
    );
};

export default WeatherPage;
