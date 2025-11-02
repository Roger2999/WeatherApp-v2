interface Props {
  days: string[] | undefined;
  selectedDay: string | undefined;
  onChange: (day: string) => void;
  currentTime: string | undefined;
}
export const DailySelector = ({
  days,
  selectedDay,
  onChange,
  currentTime,
}: Props) => {
  return (
    <>
      <select
        name="byDay"
        value={selectedDay}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 bg-sky-950"
      >
        <option value={currentTime}>{days ? "Selecciona un dia" : "-"}</option>
        {days &&
          days.map((day, i) => (
            <option value={day} key={i}>
              {day}
            </option>
          ))}
      </select>
    </>
  );
};
