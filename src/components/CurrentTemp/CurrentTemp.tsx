import type { CityData, WeatherData } from "../../types/types";
import "./CurrentTemp.css";
interface Props {
  weatherData: WeatherData | undefined;
  cityData?: CityData | undefined;
}
export const CurrentTemp = ({ weatherData, cityData }: Props) => {
  return (
    <>
      <section className="date flex flex-col">
        {cityData?.results ? (
          <span className="text-2xl text-center font-semibold">
            {cityData.results[0]?.name}, {cityData.results[0]?.country}
          </span>
        ) : (
          <span className="text-2xl font-bold">-</span>
        )}
        <span className="text-lg text-center">fecha</span>
      </section>
      <section className="flex flex-row justify-center items-center px-10">
        <article className="w-full h-full">
          <img
            src="src\assets\images\icon-sunny.webp"
            alt="icon-temp"
            className="img min-w-24"
            width={150}
            height={150}
          />
        </article>
        <article className=" temp-d text-end text-5xl font-bold">
          {weatherData
            ? `${weatherData?.current?.temperature_2m.toFixed(0)}°`
            : "-"}
        </article>
      </section>
    </>
  );
};
