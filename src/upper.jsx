export function Upper({ passed }) {
  return (
    <h1 className="font-['Manrope'] w-40 text-center text-[#52ffa8] tracking-[4px] text-[12px] h-10 flex items-center justify-center">
      {`Advice #${passed + 1}`}
    </h1>
  );
}
