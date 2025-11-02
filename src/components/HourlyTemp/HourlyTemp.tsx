interface Props {
  temp?: number | undefined;
  time?: string;
  unit?:
    | {
        time: string;
        temperature_2m: string;
      }
    | undefined;
}
export const HourlyTemp = ({ time, temp, unit }: Props) => {
  return (
    <>
      <p className="text-xl font-semibold">
        {time
          ? new Date(time)
              .toLocaleTimeString("es", {
                hour: "2-digit",
                hour12: true,
              })
              .replace(/a\.\sm\./g, "A.M")
          : "--"}
      </p>
      <p className="text-lg font-semibold">
        {temp ? temp?.toFixed(0) : "-"}
        {unit?.temperature_2m}
      </p>
    </>
  );
};
