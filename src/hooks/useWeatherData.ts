import { useQuery } from "@tanstack/react-query";
import { fetchWeatherService } from "../services/fetchWeatherervice";

export const useWeatherData = (URL: string) => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["weatherData"],
    queryFn: () => fetchWeatherService(URL),
  });
  return { data, error, isError, isLoading };
};
