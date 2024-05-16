export default function App() {
  function thing() {
    console.log("blbal");
    return 2;
  }

  return (
    <>
      <input onChange={(ev) => console.log("Hello")} type="text" />
    </>
  );
}
