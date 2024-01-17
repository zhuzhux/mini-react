import React from "mini-react";

const Counter = ({ num }) => {
  return <div>counter: {num}</div>;
};

const App = () => {
  return (
    <div id="app" className="m1">
      hello world
      <Counter num={123}></Counter>
      <Counter num={456}></Counter>
      <button
        onClick={(e) => {
          console.log("[ 点击 ]", e);
        }}
      >
        按钮
      </button>
    </div>
  );
};

export default App;
