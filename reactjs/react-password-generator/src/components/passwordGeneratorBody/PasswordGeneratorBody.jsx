import { generatePassword } from "../../libs/password";
import css from "./style.module.css";

export function PasswordGeneratorBody(props) {
  const submit = (e) => {
    e.preventDefault();
    let formData = {};
    new FormData(e.currentTarget).forEach((value, key) => {
      formData[key] = value;
    });
    props.onSubmit(generatePassword(formData));
  };

  return (
    <form onSubmit={submit} className={css.roor}>
      <div className={css.grid_container}>
        <div className={css.grid_item}>
          Size
          <select name="size" id="size" defaultValue={15}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className={css.grid_item}>
          Uppercase
          <input name="uppercase" type="checkbox" defaultChecked />
        </div>
        <div className={css.grid_item}>
          Numbers
          <input name="number" type="checkbox" defaultChecked />
        </div>
        <div className={css.grid_item}>
          Specials
          <input name="special" type="checkbox" defaultChecked />
        </div>
      </div>
      <div className={css.btn_container}>
        <button type="submit" className={css.btn_generate}>
          GENERATE
        </button>
      </div>
    </form>
  );
}
