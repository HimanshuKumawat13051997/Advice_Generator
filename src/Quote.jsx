import "./anie.css";

export function Quote({ text, author, p }) {
  return (
    <p
      className={
        p
          ? "font-['Manrope'] show text-[#cee3e9] h-28  w-[380px] text-center flex items-center justify-center text-[3.5vh] sm:text-[28px]"
          : "font-['Manrope'] quote text-[#cee3e9] h-28  w-[380px] text-center flex items-center justify-center text-[3.5vh] sm:text-[28px]"
      }
    >
      "{text}"
    </p>
  );
}
