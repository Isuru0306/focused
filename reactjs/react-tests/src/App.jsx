// import { Calculator } from "components/Calculator";
import s from "./App.module.css";
import { RandomUser } from "components/RandomUser";

export function App() {
  return (
    <div className={s.root}>
      {/* <Calculator defaultB={"17.1"} defaultOperator={"-"} /> */}
      <RandomUser />
    </div>
  );
}
