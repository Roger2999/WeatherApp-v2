import { useQuery } from "@tanstack/react-query";
import { fetchWeatherService } from "../services/fetchWeatherService";
export const useWeatherData = (
  URL: string,
  coords: {
    lat: number;
    lon: number;
  } | null,
  city: string
) => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["weatherData", URL, coords, city],
    queryFn: () =>
      coords ? fetchWeatherService(URL) : Promise.reject("coords missing"),
    staleTime: 60000,
    enabled: city.trim() != "" && !!coords,
  });
  return { data, error, isError, isLoading };
};
