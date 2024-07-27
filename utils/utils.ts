import { clsx, type ClassArray } from "clsx";
import { twMerge } from "tailwind-merge";
import * as dayjs from "dayjs";

export function cn(...classes: ClassArray) {
  return twMerge(clsx(classes));
}

export const getAgeDetails = (oldDate: dayjs.Dayjs, newDate: dayjs.Dayjs) => {
  const years = newDate.diff(oldDate, "year");
  const months = newDate.diff(oldDate, "month") - years * 12;
  const days = newDate.diff(
    oldDate.add(years, "year").add(months, "month"),
    "day",
  );

  return {
    years,
    months,
    days,
    allDays: newDate.diff(oldDate, "day"),
  };
};
