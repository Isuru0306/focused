import { PasswordGeneratorCard } from "./components/passwordGeneratorCard/PasswordGeneratorCard";
import css from "./style.module.css";
function App() {
  return (
    <div className={css.root}>
      <PasswordGeneratorCard />
    </div>
  );
}

export default App;
