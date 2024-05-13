import menuListStyle from "./style.module.css";
import { MenuItemList } from "../MenuItemList/MenuItemList";
import { DIFFICULTIES } from "./const";

export function MenuList(props) {
  return (
    <div className={menuListStyle.container}>
      {DIFFICULTIES.map((diff) => {
        return (
          <MenuItemList
            key={diff}
            isSelect={props.difficulty == diff}
            onClick={props.onItemClick}
            difficulty={diff}
          />
        );
      })}
    </div>
  );
}
