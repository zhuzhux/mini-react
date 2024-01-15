import React from "./core/React.js";

const Counter = ({ num }) => {
  return <div>counter: {num}</div>;
};

const App = () => {
  return (
    <div id="app" className="m1">
      hello world
      <Counter num={123}></Counter>
      <Counter num={456}></Counter>
    </div>
  );
};

export default App;
