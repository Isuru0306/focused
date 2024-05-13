import css from "./style.module.css";
import copyIcon from "../../assets/copy-paste.svg";
export function PasswordGeneratorFooter(props) {
  function saveInClipBoard() {
    navigator.clipboard.writeText(props.password);
  }
  return (
    <div className={css.root} onClick={saveInClipBoard}>
      <div>{props.password}</div>
      <img className={css.icon} src={copyIcon} alt="Copy Paste" />
    </div>
  );
}
