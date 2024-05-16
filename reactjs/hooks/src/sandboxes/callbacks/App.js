export default function App() {
  function onGrandChildCliked(song) {
    alert("This is the app talking !" + JSON.stringify(song));
  }
  return <ParentComponent functionForParent={onGrandChildCliked} />;
}

function ParentComponent(props) {
  function parentFunction() {
    alert("This is the parent talking");
  }
  return <ChildComponent functionForChild={props.functionForParent} />;
}

function ChildComponent(props) {
  function childFunction() {
    alert("This is the child talking");
  }
  return <GrandChildComponent functionForGrandChild={props.functionForChild} />;
}

function GrandChildComponent(props) {
  const song = {
    songName: "Let it be",
    artist: "The Beatles",
  };
  function grandChildFunction() {
    alert("This is the grand child talking");
    props.functionForGrandChild(song);
  }
  return <button onClick={grandChildFunction}>Grand child button</button>;
}
