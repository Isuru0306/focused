import { useMouseCoordinates } from "./hooks/useMouseCoordinates";

export function OtherComponent() {
  const { mouseCoordinates } = useMouseCoordinates();
  return (
    <div
      style={{
        height: 100,
        width: 100,
        backgroundColor: mouseCoordinates.x > 66 ? "blue" : "red",
      }}
    />
  );
}
