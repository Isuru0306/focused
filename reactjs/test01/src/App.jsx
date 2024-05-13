import { useState } from "react";
import { DisplayDifficulty } from "./components/DisplayDifficaulty/DisplayDifficulty";
import { MenuList } from "./components/MunuLIst/MenuList";
import i from "./style.module.css";
export function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  const onMenuListItemClick = (dif) => {
    setCurrentDifficulty(dif);
  };
  return (
    <>
      <h1>Workspace </h1>
      <div className={i.workspace}>
        <MenuList
          difficulty={currentDifficulty}
          onItemClick={onMenuListItemClick}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </>
  );
}
