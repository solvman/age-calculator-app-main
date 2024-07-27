import { forwardRef, InputHTMLAttributes, Ref, useId } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Input = forwardRef(function Input(
  { label, error }: InputProps,
  ref?: Ref<HTMLInputElement>,
) {
  const id = useId();

  return (
    <div className="relative flex min-w-[30px] flex-1 flex-col gap-1 md:gap-2">
      <label
        htmlFor={id}
        className="text-xs font-bold uppercase tracking-[3px] text-smokey-grey md:text-sm"
      >
        {label}
      </label>
      <input
        type="number"
        id={id}
        className="border-line focus:border-transparent rounded-lg border px-4 py-3 text-xl font-bold tracking-[0.2px] text-off-black focus:border-purple focus:outline-none focus:ring-0 md:px-6 md:py-3 md:text-[32px] md:tracking-[0.32px]"
      />
      <div className="h-[18px] md:h-[21px]">
        {error && (
          <em className="text-xsm font-normal italic text-light-red md:text-sm">
            {error}
          </em>
        )}
      </div>
    </div>
  );
});
export default Input;
