interface Props {
  title: string | undefined;
  param: number | undefined;
  unit: string | undefined;
}
export const WeatherData = ({ title, param, unit }: Props) => {
  return (
    <>
      <div className="weather-card flex flex-col justify-center items-start h-32 rounded-2xl bg-[#25253f] p-4">
        <div className="flex flex-1 justify-start items-center w-full h-full">
          <p className="text-xl">{title}</p>
        </div>
        <div className="flex flex-1 justify-start items-center w-full h-full">
          <p className="text-2xl">
            {param?.toFixed(0)}
            {unit ? unit : "-"}
          </p>
        </div>
      </div>
    </>
  );
};
