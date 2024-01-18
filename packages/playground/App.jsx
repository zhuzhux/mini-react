import React from "mini-react";

let showBar = false;
const Counter = () => {
  const foo = (
    <div>
      foo
      <div>child1</div>
      <div>child2</div>
      <div>child3</div>
    </div>
  );

  const bar = <div>bar</div>;
  const handleShowBar = () => {
    showBar = !showBar;
    React.update();
  };

  return (
    <div>
      counter:
      {showBar && bar}
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
