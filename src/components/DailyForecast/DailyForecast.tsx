import { weatherMap } from "../../utils/weatherIcons";

interface Props {
  day?: string;
  weatherCode?: keyof typeof weatherMap;
  max?: string | number;
  min?: string | number;
}
export const DailyForecast = ({
  day = "--",
  weatherCode,
  max = "--",
  min = "--",
}: Props) => {
  const weatherInfo =
    weatherCode !== undefined ? weatherMap[weatherCode] : undefined;
  const Icon = weatherInfo?.icon;
  return (
    <>
      <div className="daily-card flex flex-col items-center justify-between bg-[#25253f] rounded-2xl py-3">
        <div className="">{day}</div>
        <div>{Icon ? <Icon fontSize="large" /> : "?"}</div>

        <div className="flex flex-row justify-between items-center w-full px-4">
          <div className="">{max}</div>
          <div className="">{min}</div>
        </div>
      </div>
    </>
  );
};
