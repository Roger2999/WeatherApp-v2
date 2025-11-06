import type { WeatherData } from "../types/types";

export const fetchWeatherService = async (
  URL_BASE: string
): Promise<WeatherData | null> => {
  const response = await fetch(URL_BASE);
  if (!response.ok) {
    throw new Error(
      `Error in the response: ${response.status} ${response.statusText}`
    );
  }
  const result = await response.json();
  return result;
};
