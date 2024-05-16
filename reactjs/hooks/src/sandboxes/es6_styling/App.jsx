import "./app.css";
import { Car } from "./components/Car/Car";
import { Greetings } from "./components/Greetings/Greetings";

// import "./app2.css";
// import style from "./app.module.css";
// import style2 from "./app2.module.css";

export default function App() {
  return (
    <div>
      {/*<div style={{ backgroundColor: "red", height: 100, width: 100 }} />*/}
      <Car />
      <Greetings />
      {/*Conflict between rectangle classes */}
      {/*<div className="rectangle" />*/}

      {/* <div className="rectangle" />
     No conflict
      <div className={style.rectangle} />
      <div className={style2.rectangle} />
       */}
    </div>
  );
}
