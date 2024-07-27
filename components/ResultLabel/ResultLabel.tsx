type ResultLabelProps = {
  label: string;
  amount: string;
};

function ResultLabel({ label, amount }: ResultLabelProps) {
  return (
    <p className="text-[56px] font-extrabold italic leading-[110%] tracking-[1.12px] text-off-black">
      <span className="text-purple">{amount}</span> {label}
    </p>
  );
}
export default ResultLabel;
