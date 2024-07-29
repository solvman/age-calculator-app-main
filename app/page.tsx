"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import Button from "@/components/Button";
import Input from "@/components/Input";
import ResultLabel from "@/components/ResultLabel";

import { getAgeDetails } from "@/utils";

type FormData = {
  day: string;
  month: string;
  year: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
    setFocus,
    reset,
    trigger,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      day: "",
      month: "",
      year: "",
    },
  });

  const [days, setDays] = useState("--");
  const [months, setMonths] = useState("--");
  const [years, setYears] = useState("--");

  useEffect(() => {
    if (!isDirty) {
      setFocus("day");
    }
  }, [isDirty, setFocus]);

  function onSubmit(data: FormData) {
    const submitedDate = `${data.year}-${data.month}-${data.day}`;

    const birthday = dayjs(submitedDate);
    const now = dayjs();
    const { years, months, days } = getAgeDetails(birthday, now);

    setDays(days.toString());
    setMonths(months.toString());
    setYears(years.toString());

    reset();
    setFocus("day");
  }

  return (
    <main className="h-full min-h-[680px] min-w-[375px] px-4 pt-20 sm:px-6 md:flex md:items-center md:justify-center md:p-0">
      <h1 className="sr-only">Age calculator</h1>
      <article className="flex max-w-3xl flex-col gap-8 rounded-3xl rounded-br-[100px] bg-white px-6 py-12 shadow-sm md:gap-0 md:rounded-br-[200px] md:p-14">
        <h2 className="sr-only">Feel the form to calculate your age</h2>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row gap-4 md:gap-8">
            <Input
              placeholder="DD"
              label="Day"
              aria-invalid={errors.day ? "true" : "false"}
              error={errors.day?.message}
              {...register("day", {
                setValueAs: (value) => value.padStart(2, "0"),
                required: "Day is required",
                min: { value: 1, message: "Must be valid day" },
                max: { value: 31, message: "Must be valid day" },
                validate: (day, { year, month }) => {
                  if (!day || !year || !month) return true;
                  if (year === "0000" || month === "00") return true;
                  dayjs.extend(customParseFormat);
                  const currentDate = `${year}-${month}-${day}`;
                  const isValidDate = dayjs(
                    currentDate,
                    "YYYY-MM-DD",
                    true,
                  ).isValid();
                  console.log(currentDate, isValidDate);
                  return isValidDate || "Invalid date";
                },
              })}
            />
            <Input
              placeholder="MM"
              label="Month"
              aria-invalid={errors.month ? "true" : "false"}
              error={errors.month?.message}
              {...register("month", {
                setValueAs: (value) => value.padStart(2, "0"),
                onChange: () => {
                  trigger("day");
                },
                required: "Month is required",
                min: { value: 1, message: "Must be valid month" },
                max: { value: 12, message: "Must be valid month" },
              })}
            />
            <Input
              placeholder="YYYY"
              label="Year"
              aria-invalid={errors.year ? "true" : "false"}
              error={errors.year?.message}
              {...register("year", {
                setValueAs: (value) => value.padStart(4, "0"),
                onChange: () => {
                  trigger("day");
                },
                required: "Year is required",
                min: { value: 100, message: "Year must be 100 or greater" },
                max: {
                  value: dayjs().year() - 1,
                  message: "Must be in the past",
                },
              })}
            />
          </div>
          <div className="border-red relative flex flex-col justify-center border-light-grey">
            <hr className="absolute left-0 top-1/2 w-full border-light-grey" />
            <Button disabled={isSubmitting} />
          </div>
        </form>
        <section>
          <h2 className="sr-only">Results</h2>
          <ResultLabel label="years" amount={years} />
          <ResultLabel label="months" amount={months} />
          <ResultLabel label="days" amount={days} />
        </section>
      </article>
    </main>
  );
}
