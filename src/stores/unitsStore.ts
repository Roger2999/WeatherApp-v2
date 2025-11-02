import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UnitsState {
  temp: "celsius" | "fahrenheit";
  wind: "kmh" | "mph";
  precipitation: "mm" | "inch";
  setTemp: (unit: "celsius" | "fahrenheit") => void;
  setWind: (unit: "kmh" | "mph") => void;
  setPrecipitation: (unit: "mm" | "inch") => void;
}

export const unitsStore = create(
  persist<UnitsState>(
    (set) => ({
      temp: "celsius",
      wind: "kmh",
      precipitation: "mm",

      setTemp: (unit) =>
        set((state) => ({
          temp: (state.temp = unit),
        })),
      setWind: (unit) =>
        set((state) => ({
          wind: (state.wind = unit),
        })),
      setPrecipitation: (unit) =>
        set((state) => ({
          precipitation: (state.precipitation = unit),
        })),
    }),
    { name: "units-storage" }
  )
);
