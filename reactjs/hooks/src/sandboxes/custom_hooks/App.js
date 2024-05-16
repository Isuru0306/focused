import { useEffect, useState } from "react";
import { useMouseCoordinates } from "./hooks/useMouseCoordinates";
import { OtherComponent } from "./OtherComponent";

export default function App() {
  const { mouseCoordinates } = useMouseCoordinates({ x: 0, y: 0 });

  return (
    <>
      x : {mouseCoordinates.x}y : {mouseCoordinates.y}
      <OtherComponent />
    </>
  );
}
