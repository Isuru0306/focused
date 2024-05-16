import { useEffect, useState } from "react";

export function useMouseCoordinates(defaultValue) {
  const [mouseCoordinates, setMouseCoordinates] = useState(
    defaultValue || {
      x: null,
      y: null,
    }
  );

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setMouseCoordinates({ x: event.x, y: event.y });
    });
  }, []);

  return { mouseCoordinates, name: "Codiku" };
}
