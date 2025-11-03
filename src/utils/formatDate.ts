export const formatDate = (isoString: string | undefined) => {
  if (!isoString) return "-";

  const date = new Date(isoString);

  return date.toLocaleDateString("en-US", {
    weekday: "long", // Tuesday
    month: "short", // Aug
    day: "numeric", // 5
    year: "numeric", // 2025
  });
};
export const formatDateToDay = (isoString: string | undefined) => {
  if (!isoString) return "--";

  const date = new Date(isoString);

  return date.toLocaleDateString("en-US", {
    weekday: "long", // Tuesday
  });
};
