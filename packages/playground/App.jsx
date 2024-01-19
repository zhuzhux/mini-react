import React from "mini-react";

function Foo() {
  const [count, setCount] = React.useState(10);
  const [bar, setBar] = React.useState("bar");
  function handleClick() {
    setCount((prev) => {
      return prev + 1;
    });
    setBar((prev) => {
      return "bar" + prev;
    });
  }

  return (
    <div>
      <div>count: {count}</div>
      <div>bar : {bar}</div>
      <button onClick={handleClick}>按钮</button>
    </div>
  );
}

const App = () => {
  return (
    <div id="app" className="m1">
      hi mini-react
      <Foo></Foo>
    </div>
  );
};

export default App;
