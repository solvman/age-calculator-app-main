import { motion } from "framer-motion";

type ResultLabelProps = {
  label: string;
  amount: string;
};

function ResultLabel({ label, amount }: ResultLabelProps) {
  return (
    <motion.p
      layout
      className="flex flex-row gap-2 text-[56px] font-extrabold italic leading-[110%] -tracking-[1.12px] text-off-black md:text-[104px] md:-tracking-[2.08px]"
    >
      <motion.span
        key={amount}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        exit={{ opacity: 0, scale: 0 }}
        className="text-purple"
      >
        {amount}
      </motion.span>
      <motion.span
        key={label}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        exit={{ opacity: 0, scale: 0 }}
      >
        {label}
      </motion.span>
    </motion.p>
  );
}
export default ResultLabel;
