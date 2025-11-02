import { useQuery } from "@tanstack/react-query";
import type { CityData } from "../types/types";

export const useWeatherCity = (
  URL_BASE: string,
  queryFn: (URL_BASE: string) => Promise<CityData>
) => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["city", URL_BASE],
    queryFn: () => queryFn(URL_BASE),
    staleTime: 60000,
  });
  return { data, error, isError, isLoading };
};
