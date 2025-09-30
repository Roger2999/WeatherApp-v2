export const fetchWeatherService = async (URL_BASE: string) => {
  const response = await fetch(URL_BASE);
  if (!response.ok) {
    throw new Error(
      `Error in the response: ${response.status} ${response.statusText}`
    );
  }
  const result = await response.json();
  return result;
};
