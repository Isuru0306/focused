import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  function incrementConter() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <button onClick={incrementConter}>Increment counter</button>
      <div>Counter value {counter}</div>
    </div>
  );
}
