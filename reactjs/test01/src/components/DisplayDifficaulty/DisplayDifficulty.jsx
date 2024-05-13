import difficultyStyle from "./style.module.css";

export function DisplayDifficulty(props) {
  return (
    <div className={difficultyStyle.container}>
      {props.difficulty
        ? `Difficulty Set to ${props.difficulty}`
        : "No Difficulty Set"}
    </div>
  );
}
