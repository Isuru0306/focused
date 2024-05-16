import { memo } from "react";

export const Hello = memo(({ onClick }) => {
  console.log("RERENDER <HELLO/>");
  return <button onClick={onClick}>Hello ! </button>;
});
