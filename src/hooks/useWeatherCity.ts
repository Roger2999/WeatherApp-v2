import { useQuery } from "@tanstack/react-query";
import { fetchCityService } from "../services/fetchCityService";

export const useWeatherCity = (URL_BASE: string, city: string | undefined) => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["city", URL_BASE, city],
    queryFn: () => fetchCityService(URL_BASE),
    staleTime: 60000,
    enabled: !!city,
  });
  return { data, error, isError, isLoading };
};
