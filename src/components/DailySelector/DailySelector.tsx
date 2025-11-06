import { formatDateToDay } from "../../utils/formatDate";

interface Props {
  days: string[] | undefined;
  selectedDay: string | undefined;
  onChange: (day: string) => void;
}
export const DailySelector = ({ days, selectedDay, onChange }: Props) => {
  return (
    <>
      <select
        name="byDay"
        value={selectedDay}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 bg-[#202135] rounded-xl text-gray-50 font-medium hover:bg-[#2f2f49]"
      >
        {days ? (
          days.map((day, i) => (
            <option value={day} key={i}>
              {formatDateToDay(day)}
            </option>
          ))
        ) : (
          <option value="">-</option>
        )}
      </select>
    </>
  );
};
