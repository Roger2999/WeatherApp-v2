export const combineHourlyData = (
  times: string[] | undefined,
  temps: number[] | undefined
) => {
  const combinated = times?.map((t, temp) => ({
    time: t,
    temp: temps && temps[temp],
  }));

  return combinated;
};
export const filtratedByDay = (
  data:
    | {
        time: string;
        temp: number | undefined;
      }[]
    | undefined,
  selectDay: string | undefined
) => {
  if (!data || !selectDay) return [];
  const filtrated = data?.filter((item) => item.time.startsWith(selectDay));
  return filtrated;
};
export const HourlyLimit = (
  data:
    | {
        time: string;
        temp: number | undefined;
      }[]
    | undefined,
  limit: number
) => {
  return data?.slice(0, limit);
};
