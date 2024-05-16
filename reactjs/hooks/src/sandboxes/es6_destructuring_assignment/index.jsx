import { useState } from "react";

export default function App() {
  const arr = [1, 2, 3, 4, 5];
  const [one, two, three, ...rest] = arr;

  return (
    <>
      {one} {two} {three} {rest}
    </>
  );
}
