import { useState } from "react";
import { unitsStore } from "../../stores/unitsStore";

export const UnitSelector = () => {
  const { temp, wind, precipitation, setTemp, setWind, setPrecipitation } =
    unitsStore();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col items-end absolute z-50">
        <button
          className="bg-[#24253c] p-3 rounded-xl mb-4 text-xs"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <div className="flex gap-3">
            <img src="src\assets\images\icon-units.svg" alt="units-icon" />
            {"Units"}
            <img
              src="src\assets\images\icon-dropdown.svg"
              alt="dropdown-icon"
            />
          </div>
        </button>
        {open && (
          <div className="flex flex-col gap-3 bg-slate-900 text-white p-4 rounded-xl w-64">
            {/* Temperatura */}
            <label className="flex flex-col">
              <span className="text-sm text-slate-400">Temperature</span>
              <select
                name="temp"
                value={temp}
                onChange={(e) =>
                  setTemp(e.target.value as "celsius" | "fahrenheit")
                }
                className="bg-slate-800 border border-slate-700 rounded-lg p-2 mt-1"
              >
                <option value="celsius">Celsius (°C)</option>
                <option value="fahrenheit">Fahrenheit (°F)</option>
              </select>
            </label>

            {/* Velocidad del viento */}
            <label className="flex flex-col">
              <span className="text-sm text-slate-400">Wind Speed</span>
              <select
                value={wind}
                onChange={(e) => setWind(e.target.value as "kmh" | "mph")}
                className="bg-slate-800 border border-slate-700 rounded-lg p-2 mt-1"
              >
                <option value="kmh">km/h</option>
                <option value="mph">mph</option>
              </select>
            </label>

            {/* Precipitación */}
            <label className="flex flex-col">
              <span className="text-sm text-slate-400">Precipitation</span>
              <select
                value={precipitation}
                onChange={(e) =>
                  setPrecipitation(e.target.value as "mm" | "inch")
                }
                className="bg-slate-800 border border-slate-700 rounded-lg p-2 mt-1"
              >
                <option value="mm">Milímetros (mm)</option>
                <option value="inch">Pulgadas (in)</option>
              </select>
            </label>
          </div>
        )}
      </div>
    </>
  );
};
