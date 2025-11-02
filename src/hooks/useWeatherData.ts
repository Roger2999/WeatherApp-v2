import { useQuery } from "@tanstack/react-query";
import { fetchWeatherService } from "../services/fetchWeatherService";
export const useWeatherData = (
  URL: string,
  coords: {
    lat: number;
    lon: number;
  } | null
) => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["weatherData", URL, coords],
    queryFn: () => fetchWeatherService(URL),
    staleTime: 60000,
    enabled: !!coords,
  });
  return { data, error, isError, isLoading };
};
