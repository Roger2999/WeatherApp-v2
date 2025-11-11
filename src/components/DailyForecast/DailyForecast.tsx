import { formatDateToDay } from "../../utils/formatDate";
import { weatherMap } from "../../utils/weatherIcons";

interface Props {
  day?: string;
  weatherCode?: keyof typeof weatherMap;
  max?: string | number;
  min?: string | number;
}
export const DailyForecast = ({
  day,
  weatherCode,
  max = "--",
  min = "--",
}: Props) => {
  const weatherInfo = weatherCode ? weatherMap[weatherCode] : undefined;
  const Icon = weatherInfo?.icon;
  const formatedDatetoDay = formatDateToDay(day);
  return (
    <>
      <div className="daily-card flex flex-col  items-center justify-between bg-[#25253f] rounded-2xl py-3 text-white">
        <div className="">{formatedDatetoDay}</div>
        <div>{Icon ? <Icon color="warning" fontSize="large" /> : ""}</div>

        <div className="flex flex-row justify-between items-center w-full px-4">
          <div className="">{max}</div>
          <div className="">{min}</div>
        </div>
      </div>
    </>
  );
};
