import React from "mini-react";

let showBar = false;
const Counter = () => {
  // const foo = <div>foo</div>;
  const Foo = () => {
    return <div>foo</div>;
  };
  const bar = <p>bar</p>;
  const handleShowBar = () => {
    showBar = !showBar;
    React.update();
  };

  return (
    <div>
      counter:
      <div>{showBar ? bar : <Foo></Foo>}</div>
      <button onClick={handleShowBar}>按钮</button>
    </div>
  );
};

const App = () => {
  return (
    <div id="app" className="m1">
      hi mini-react
      <Counter></Counter>
    </div>
  );
};

export default App;
