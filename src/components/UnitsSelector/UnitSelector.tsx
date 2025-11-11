import { useState } from "react";
import { unitsStore } from "../../stores/unitsStore";
import { Select } from "./Select/Select";

export const UnitSelector = () => {
  const { temp, wind, precipitation, setTemp, setWind, setPrecipitation } =
    unitsStore();
  const [open, setOpen] = useState<boolean>(false);
  const closeMenu = () => {
    setOpen(false);
  };
  const handleOverload = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <>
      <div className="flex flex-col items-end absolute right-0 z-50 gap-3">
        <button
          className="btn-units bg-[#24253c] p-3 rounded-xl mr-10 text-xs"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <div className="flex gap-3">
            <img src="/assets/images/icon-units.svg" alt="units-icon" />
            <p className="text-gray-50">Units</p>
            <img src="/assets/images/icon-dropdown.svg" alt="dropdown-icon" />
          </div>
        </button>
        {open && (
          <div
            onClick={closeMenu}
            className="overload flex flex-col items-end fixed top-0 left-0 w-dvw h-dvh bg-transparent z-40"
          >
            <div
              onClick={handleOverload}
              className="flex flex-col gap-3 bg-slate-900 text-white p-4 rounded-xl w-64 mx-10 my-20"
            >
              {/* Temperatura */}

              <Select
                title="Temperature"
                value={temp}
                onChange={(e) =>
                  setTemp((e.target.value as "celsius") || "fahrenheit")
                }
              >
                <option value="celsius">Celsius (°C)</option>
                <option value="fahrenheit">Fahrenheit (°F)</option>
              </Select>
              <Select
                title="Wind Speed"
                value={wind}
                onChange={(e) => setWind(e.target.value as "kmh" | "mph")}
              >
                <option value="kmh">km/h</option>
                <option value="mph">mph</option>
              </Select>
              <Select
                title="Wind Speed"
                value={precipitation}
                onChange={(e) =>
                  setPrecipitation(e.target.value as "mm" | "inch")
                }
              >
                <option value="mm">Milímetros (mm)</option>
                <option value="inch">Pulgadas (in)</option>
              </Select>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
