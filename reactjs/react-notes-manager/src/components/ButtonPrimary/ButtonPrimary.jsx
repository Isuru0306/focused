import s from "./style.module.css";
export function ButtonPrimary({
  type = "button",
  children,
  onClick,
  isDisabled,
  className,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn btn-primary ${s.button} ${className}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
