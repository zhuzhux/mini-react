import React from "mini-react";

let count = 10;
let props = { id: 111 };
const Counter = ({ num }) => {
  const handleClick = () => {
    console.log("[ 点击 ]");
    count++;
    props = {};
    React.update();
  };
  return (
    <div {...props}>
      counter:{count}
      <button onClick={handleClick}>按钮</button>
    </div>
  );
};

const App = () => {
  return (
    <div id="app" className="m1">
      hello world
      <Counter num={123}></Counter>
      {/* <Counter num={456}></Counter> */}
    </div>
  );
};

export default App;
