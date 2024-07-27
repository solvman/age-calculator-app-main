type ResultLabelProps = {
  label: string;
  amount: string;
};

function ResultLabel({ label, amount }: ResultLabelProps) {
  return (
    <p className="flex flex-row gap-2 text-[56px] font-extrabold italic leading-[110%] tracking-[1.12px] text-off-black">
      <span className="text-purple">{amount}</span>
      <span>{label}</span>
    </p>
  );
}
export default ResultLabel;
