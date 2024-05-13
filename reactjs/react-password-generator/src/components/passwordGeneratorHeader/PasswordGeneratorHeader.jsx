import css from "./style.module.css";
import lockIcon from "../../assets/lock.svg";
export function PasswordGeneratorHeader() {
  return (
    <div className={css.root}>
      <div className={css.title}>Password Generator</div>
      <img src={lockIcon} className={css.icon} alt="Lock Icon" />
    </div>
  );
}
