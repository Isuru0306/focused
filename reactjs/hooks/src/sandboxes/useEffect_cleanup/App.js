import { useEffect, useState } from "react";
import { Child } from "./Child";

export default function App() {
  const [isChildVisible, setIsChildVisible] = useState(true);

  useEffect(() => {
    // removed after 3 seconds
    setTimeout(() => {
      setIsChildVisible(false);
    }, 3000);
  }, []);

  return <div>{isChildVisible && <Child />}</div>;
}
