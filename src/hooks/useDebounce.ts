import { useEffect, useState } from "react";
export const useDebounce = (city: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(city);
  useEffect(() => {
    const handleDebounce = setTimeout(() => {
      setDebounceValue(city);
    }, delay);
    return () => {
      clearTimeout(handleDebounce);
    };
  }, [city, delay]);

  return { debounceValue };
};
