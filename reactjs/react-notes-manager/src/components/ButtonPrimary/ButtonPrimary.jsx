import s from "./style.module.css";
export function ButtonPrimary({
  type = "button",
  children,
  onClick,
  isDisabled,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn btn-primary ${s.button}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
