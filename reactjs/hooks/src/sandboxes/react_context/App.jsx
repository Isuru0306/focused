import React from "react";
const UserContext = React.createContext({ name: "default", status: "offline" });

export default function App() {
  const [userName, setUserName] = React.useState(1);
  React.useEffect(() => {
    setInterval(() => {
      setUserName((name) => name + 1);
    }, 2000);
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ name: userName, status: "online" }}>
        <Parent />
        <Other />
      </UserContext.Provider>
      <GrandChild />
    </div>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  const user = React.useContext(UserContext);
  return <div>Hi {user.name}</div>;
}

function Other() {
  console.log("<Other/> render");

  return <div>Other</div>;
}
