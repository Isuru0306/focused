import { useState } from "react";

export default function App() {
  const [movie, setMovie] = useState("Lord of the ring");

  function updateMovie() {
    setMovie("Fight club");
    console.log(movie);
  }

  return (
    <>
      <button onClick={updateMovie}>{movie}</button>
    </>
  );
}
