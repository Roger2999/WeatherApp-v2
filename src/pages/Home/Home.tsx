import { useState } from "react";
import { useWeatherData } from "../../hooks/useWeatherData";

export const Home = () => {
  const URL_BASE = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "8d2c3cd8dd7a4568d19d8581d57a871f";
  const [city, setCity] = useState("Madrid");
  const { data } = useWeatherData(`${URL_BASE}?q=${city}&appid=${API_KEY}`);
  return (
    <>
      <h1>Home</h1>
      <p>Temperatura:</p>
      <span>{data?.main?.temp}</span>
    </>
  );
};
