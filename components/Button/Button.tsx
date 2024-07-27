type ButtonProps = {
  disabled?: boolean;
};

function Button({ disabled }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type="submit"
      className="relative flex h-16 w-16 items-center justify-center rounded-full bg-purple md:h-24 md:w-24"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="44"
        viewBox="0 0 46 44"
      >
        <g fill="none" stroke="#FFF" strokeWidth="2">
          <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
        </g>
      </svg>
    </button>
  );
}
export default Button;
