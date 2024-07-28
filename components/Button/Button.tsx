import { motion } from "framer-motion";

type ButtonProps = {
  disabled?: boolean;
};

function Button({ disabled }: ButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.2,
          type: "spring",
          stiffness: 260,
          damping: 20,
        },
      }}
      disabled={disabled}
      type="submit"
      className="relative flex h-16 w-16 items-center justify-center self-center rounded-full bg-purple shadow-sm focus-visible:outline-dotted focus-visible:outline-[3px] focus-visible:outline-purple md:h-24 md:w-24 md:self-end"
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
    </motion.button>
  );
}
export default Button;
