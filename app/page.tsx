import Button from "@/components/Button";
import Input from "../components/Input";
import { Result } from "postcss";
import ResultLabel from "@/components/ResultLabel";

export default function Home() {
  return (
    <main className="px-4 pt-20">
      <h1 className="sr-only">Age calculator</h1>
      <article className="flex flex-col gap-8 rounded-3xl rounded-br-[100px] bg-white px-6 py-12">
        <h2 className="sr-only">Feel the form to calculate your age</h2>
        <form className="flex flex-col gap-8">
          <div className="flex flex-row gap-4">
            <Input label="Day" />
            <Input label="Month" />
            <Input label="Year" />
          </div>
          <div className="border-red border-line relative flex items-center justify-center">
            <hr className="border-line absolute left-0 top-1/2 w-full" />
            <Button />
          </div>
        </form>
        <section>
          <h2 className="sr-only">Results</h2>
          <ResultLabel label="years" amount="26" />
          <ResultLabel label="months" amount="6" />
          <ResultLabel label="days" amount="12" />
        </section>
      </article>
    </main>
  );
}
