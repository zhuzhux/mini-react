import React from "mini-react";

let countFoo = 1;
function Foo() {
  console.log("[ foo rerun ]");
  const update = React.update();
  function handleClick() {
    countFoo++;
    update();
  }

  return (
    <div>
      foo count: {countFoo}
      <button onClick={handleClick}>按钮</button>
    </div>
  );
}

let countBar = 1;
function Bar() {
  console.log("[ bar rerun ]");
  const update = React.update();
  function handleClick() {
    countBar++;
    update();
  }

  return (
    <div>
      bar count: {countBar}
      <button onClick={handleClick}>按钮</button>
    </div>
  );
}

let countRoot = 1;
const App = () => {
  console.log("[ app rerun ]");
  const update = React.update();
  function handleClick() {
    countRoot++;
    update();
  }
  return (
    <div id="app" className="m1">
      hi mini-react count: {countRoot}
      <button onClick={handleClick}>按钮</button>
      <Foo></Foo>
      <Bar></Bar>
    </div>
  );
};

export default App;
