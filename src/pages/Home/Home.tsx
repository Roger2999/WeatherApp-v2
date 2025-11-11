import { useState } from "react";
import {
  CitySearch,
  CurrentTemp,
  DailyForecast,
  DailySelector,
  DailyTemp,
  WeatherData,
} from "../../components";
import { useDebounce } from "../../hooks/useDebounce";
import "./Home.css";
import { useWeather } from "../../hooks/useWeather";
import type { Result } from "../../types/types";
import { UnitSelector } from "../../components/UnitsSelector/UnitSelector";
import type { weatherMap } from "../../utils/weatherIcons";

export const Home = () => {
  const [inputCity, setInputCity] = useState("");
  const { debounceValue } = useDebounce(inputCity, 600);
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(
    null
  );

  //customHook que maneja toda la logica
  //fetch para obtener latitud y longitud de la ciudad
  //fetch para obtener datos del clima
  //manejo de estados de loading y error
  //manejo de seleccion de dia y filtrado de datos por dia
  const {
    cityData,
    weatherData,
    isWeatherLoading,
    isCityLoading,
    isWeatherError,
    selectedDay,
    setSelectedDay,
    unit,
    hourlyUnits,
    //limit,
    filtrated,
  } = useWeather(debounceValue, coords);
  const onSelectCity = (city: Result) => {
    setCoords({ lat: city.latitude, lon: city.longitude });
  };
  return (
    <>
      <div className="flex flex-col justify-start items-center h-full w-full gap-10 bg-[#02012b]">
        <div className="flex justify-between w-full relative top-8">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            className="logo ml-10"
          />
          <UnitSelector />
        </div>

        <h1 className="title text-center text-gray-50 w-auto font-bold text-4xl px-2">
          How's the sky looking to day?
        </h1>
        <div className="flex justify-center w-5/6 search">
          <CitySearch
            onSelectCity={onSelectCity}
            inputCity={inputCity}
            setInputCity={setInputCity}
            cityData={cityData}
            isCityLoading={isCityLoading}
          />
        </div>

        <>
          {isWeatherError ? (
            <p className="error text-gray-50 text-4xl w-fit m-auto">
              Error al cargar los datos del clima. Por favor, intente de nuevo.
            </p>
          ) : (
            <div className="box flex flex-row justify-center items-start w-11/12 h-full gap-5 mb-5">
              <div className="container-1 flex flex-col justify-stretch w-full max-w-[70rem] min-w-[20rem] h-full">
                <div className="temp-container flex justify-between items-center min-h-64 rounded-2xl p-10">
                  {isWeatherLoading ? (
                    <p className="text-xl text-gray-50 font-bold">Loading...</p>
                  ) : (
                    <CurrentTemp
                      coords={coords}
                      weatherData={weatherData}
                      cityData={cityData}
                    />
                  )}
                </div>
                <div className="weather-data  w-full my-3">
                  <WeatherData
                    title="Feels Like"
                    param={weatherData?.current?.apparent_temperature}
                    unit={unit?.apparent_temperature}
                  />
                  <WeatherData
                    title="Humidity"
                    param={weatherData?.current?.relative_humidity_2m}
                    unit={unit?.relative_humidity_2m}
                  />
                  <WeatherData
                    title="Wind"
                    param={weatherData?.current?.wind_speed_10m}
                    unit={unit?.wind_speed_10m}
                  />
                  <WeatherData
                    title="Precipitation"
                    param={weatherData?.current?.precipitation}
                    unit={unit?.precipitation}
                  />
                </div>
                <h2 className="daily-title text-xl text-gray-50 font-semibold mt-7">
                  Daily Forecast
                </h2>
                <div className="daily-forecast flex items-end w-full h-full">
                  {weatherData?.daily.time.length
                    ? weatherData?.daily?.time.map((d, i) => (
                        <div key={i}>
                          <DailyForecast
                            day={d}
                            weatherCode={
                              weatherData?.daily?.weather_code[
                                i
                              ] as keyof typeof weatherMap
                            }
                            max={weatherData?.daily?.temperature_2m_max[
                              i
                            ].toFixed(0)}
                            min={weatherData?.daily?.temperature_2m_min[
                              i
                            ].toFixed(0)}
                          />
                        </div>
                      ))
                    : Array(7)
                        .fill(null)
                        .map((_, i) => (
                          <div key={i}>
                            <DailyForecast />
                          </div>
                        ))}
                </div>
              </div>
              <div className="container-2 flex flex-col justify-stretch w-full max-w-[35rem] min-w-[15rem] h-full">
                <DailyTemp hourlyData={filtrated} hourlyUnits={hourlyUnits}>
                  <DailySelector
                    selectedDay={selectedDay}
                    onChange={setSelectedDay}
                    days={weatherData?.daily?.time}
                  />
                </DailyTemp>
              </div>
            </div>
          )}
        </>
      </div>
    </>
  );
};
