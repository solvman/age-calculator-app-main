import { cn } from "@/utils";
import { forwardRef, InputHTMLAttributes, Ref, useId } from "react";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "className"> & {
  label: string;
  error?: string;
};

const Input = forwardRef(function Input(
  { label, error, ...rest }: InputProps,
  inputRef?: Ref<HTMLInputElement>,
) {
  const id = useId();

  return (
    <div className="relative flex min-w-[30px] flex-1 flex-col gap-1 md:gap-2">
      <label
        htmlFor={id}
        className={cn(
          "text-xs font-bold uppercase tracking-[3px] text-smokey-grey md:text-sm",
          error && "text-light-red",
        )}
      >
        {label}
      </label>
      <input
        type="number"
        id={id}
        ref={inputRef}
        aria-labelledby={id}
        aria-errormessage={`error-${id}`}
        {...rest}
        className={cn(
          "focus:border-transparent rounded-lg border border-light-grey px-4 py-3 text-xl font-bold tracking-[0.2px] text-off-black shadow-sm focus:border-purple focus:outline-none focus:ring-0 md:px-6 md:py-3 md:text-[32px] md:tracking-[0.32px]",
          error && "border-light-red focus:border-light-red",
        )}
      />
      <div className="h-[18px] md:h-[21px]">
        {error && (
          <em
            id={`error-${id}`}
            className="block text-xs font-normal italic leading-tight text-light-red md:text-sm"
          >
            {error}
          </em>
        )}
      </div>
    </div>
  );
});
export default Input;
