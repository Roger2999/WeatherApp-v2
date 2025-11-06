import type { CityData, WeatherData } from "../../types/types";
import { formatDate } from "../../utils/formatDate";
import "./CurrentTemp.css";
interface Props {
  weatherData: WeatherData | undefined | null;
  cityData?: CityData | undefined | null;
  coords?: { lat: number; lon: number } | null;
}
export const CurrentTemp = ({ weatherData, cityData, coords }: Props) => {
  const dataFormated = formatDate(
    weatherData?.current.time ? weatherData?.current?.time : undefined
  );
  return (
    <>
      <section className="date text-gray-50 flex flex-col gap-3">
        {cityData?.results && coords ? (
          <span className="text-2xl text-center font-semibold">
            {cityData.results[0]?.name}, {cityData.results[0]?.country}
          </span>
        ) : (
          <span className="text-2xl font-bold">-</span>
        )}
        {weatherData?.current.time ? (
          <span className="text-lg text-center">{dataFormated}</span>
        ) : (
          <span className="text-2xl font-bold">-</span>
        )}
      </section>
      <section className="flex flex-row justify-center items-center px-10 text-gray-50">
        <article className="w-full h-full">
          <img
            src="/assets/images/icon-sunny.webp"
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
