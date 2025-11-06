import type { CityData } from "../types/types";

export const fetchCityService = async (
  URL_BASE: string
): Promise<CityData | null> => {
  const response = await fetch(URL_BASE);
  if (!response.ok) {
    throw new Error(
      `Error in the response: ${response.status},${response.statusText}`
    );
  }
  return await response.json();
};
