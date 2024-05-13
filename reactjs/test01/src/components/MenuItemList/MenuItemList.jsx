import { useState } from "react";
import menuListStyle from "./style.module.css";
export function MenuItemList(props) {
  const [isHoved, setIsHoved] = useState(false);

  function activate() {
    setIsHoved(true);
  }

  function deactivate() {
    setIsHoved(false);
  }

  function backGroundColor() {
    if (isHoved) {
      return "#4082ed";
    } else {
      if (props.isSelect) {
        return "#00752b";
      } else {
        return "#d8e0ed";
      }
    }
  }

  const onItemClick = () => {
    props.onClick(props.difficulty);
  };

  return (
    <div
      onClick={onItemClick}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      style={{ backgroundColor: backGroundColor() }}
      className={menuListStyle.container}
    >
      Set to : {props.difficulty}
    </div>
  );
}
