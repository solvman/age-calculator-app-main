"use client";

import Button from "@/components/Button";
import Input from "../components/Input";
import ResultLabel from "@/components/ResultLabel";
import { set, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

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
  } = useForm({
    defaultValues: {
      day: "",
      month: "",
      year: "",
    },
  });

  const [days, setDays] = useState("- -");
  const [months, setMonths] = useState("- -");
  const [years, setYears] = useState("- -");

  useEffect(() => {
    if (!isDirty) {
      setFocus("day");
    }
  }, [isDirty, setFocus]);

  function onSubmit(data: FormData) {
    const birthday = Date.parse(`${data.year}-${data.month}-${data.day}`);
    const now = Date.now();
    const diff = now - birthday;
    const age = new Date(diff);
    console.log(age);
    setDays(data.day);
    setMonths(data.month);
    setYears(data.year);
    reset();
    setFocus("day");
  }

  return (
    <main className="h-full min-h-[680px] px-4 pt-20 md:flex md:items-center md:justify-center">
      <h1 className="sr-only">Age calculator</h1>
      <article className="flex flex-col gap-8 rounded-3xl rounded-br-[100px] bg-white px-6 py-12 shadow-sm md:max-w-[840px] md:gap-0 md:rounded-br-[200px] md:p-14">
        <h2 className="sr-only">Feel the form to calculate your age</h2>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row gap-4 md:gap-8">
            <Input
              label="Day"
              error={errors.day?.message}
              {...register("day")}
            />
            <Input
              label="Month"
              error={errors.month?.message}
              {...register("month")}
            />
            <Input
              label="Year"
              error={errors.year?.message}
              {...register("year")}
            />
          </div>
          <div className="border-red border-line relative flex items-center justify-center md:justify-end">
            <hr className="border-line absolute left-0 top-1/2 w-full" />
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
