export default function App() {
  return (
    <div>
      <ParentComponent height={100}>
        <div>Hello</div>
      </ParentComponent>
    </div>
  );
}

function ParentComponent(props) {
  return (
    <div>
      {props.children}
      <ChildComponent height={props.height} />
    </div>
  );
}

function ChildComponent(props) {
  return (
    <div>
      <GrandChildComponent
        height={props.height}
        width={200}
        anObject={{ person: { name: "Scott", age: 2 } }}
        aFunction={function hello() {
          console.log("Hello");
        }}
      />
    </div>
  );
}

function GrandChildComponent(props) {
  return (
    <div
      style={{
        height: props.height,
        width: props.width,
        backgroundColor: "blue",
      }}
    ></div>
  );
}
