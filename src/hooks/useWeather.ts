// useWeather.ts
import { useEffect, useState } from "react";
import { useWeatherData } from "../hooks/useWeatherData";
import { useWeatherCity } from "../hooks/useWeatherCity";
import {
  combineHourlyData,
  filtratedByDay,
  HourlyLimit,
} from "../utils/weatherHelpers";
import { URL_BASE, URL_BASE_CITY } from "../utils/const";
import { unitsStore } from "../stores/unitsStore";

export const useWeather = (
  city: string,
  coords: {
    lat: number;
    lon: number;
  } | null
) => {
  const { temp, wind, precipitation } = unitsStore();
  const [selectedDay, setSelectedDay] = useState<string | undefined>();
  //fetch para obtener latitud y longitud de la ciudad
  const { data: cityData, isLoading: isCityLoading } = useWeatherCity(
    `${URL_BASE_CITY}?name=${city}&count=10&language=es&format=json`,
    city
  );
  //fetch para obtener datos del clima a partir de latitud y logitud
  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    isError: isWeatherError,
  } = useWeatherData(
    `${URL_BASE}?latitude=${coords?.lat}&longitude=${coords?.lon}&daily=weather_code&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m&forecast_days=7&wind_speed_unit=${wind}&temperature_unit=${temp}&precipitation_unit=${precipitation}`,
    coords,
    city
  );

  useEffect(() => {
    if (weatherData?.daily?.time) {
      setSelectedDay(weatherData.daily.time[0]);
    }
  }, [weatherData]);

  const currentTime = weatherData?.daily?.time?.[0];
  const unit = weatherData?.current_units;
  const hourlyUnits = weatherData?.hourly_units;
  const combinated = combineHourlyData(
    weatherData?.hourly?.time,
    weatherData?.hourly?.temperature_2m
  );
  const filtrated = filtratedByDay(combinated, selectedDay);
  const limit = HourlyLimit(filtrated, 8);

  return {
    cityData,
    isCityLoading,
    weatherData,
    isWeatherLoading,
    isWeatherError,
    selectedDay,
    setSelectedDay,
    currentTime,
    unit,
    hourlyUnits,
    limit,
    filtrated,
  };
};
