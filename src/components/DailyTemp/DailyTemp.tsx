import type { ReactNode } from "react";
import { HourlyTemp } from "../HourlyTemp/HourlyTemp";

interface Props {
  hourlyData:
    | {
        time: string;
        temp: number | undefined;
      }[]
    | undefined;
  hourlyUnits:
    | {
        time: string;
        temperature_2m: string;
      }
    | undefined;
  children: ReactNode;
}

export const DailyTemp = ({ hourlyData, hourlyUnits, children }: Props) => {
  return (
    <div className="daily flex flex-col justify-start items-center w-full h-full rounded-2xl p-5 bg-[#25253f] text-gray-50">
      <div className="daily-header flex flex-row justify-between items-center w-full px-5 mb-6">
        <p className="text-xl font-semibold">Hourly forecast</p>
        {children}
      </div>
      <div className="flex flex-col justify-start items-center w-full h-full gap-2 overflow-y-auto max-h-[550px] pr-2">
        {hourlyData && hourlyData.length > 0
          ? hourlyData.map((t, i) => (
              <div
                key={i}
                className="hourly-data flex justify-between items-center w-full max-h-20 px-6 py-3 bg-[#2f2f49] rounded-lg shadow-2xl"
              >
                <HourlyTemp temp={t.temp} time={t.time} unit={hourlyUnits} />
              </div>
            ))
          : Array(8)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="hourly-data flex justify-between items-center w-full max-h-20 px-6 py-3 bg-[#2f2f49] rounded-lg shadow-2xl"
                >
                  <HourlyTemp />
                </div>
              ))}
      </div>
    </div>
  );
};
