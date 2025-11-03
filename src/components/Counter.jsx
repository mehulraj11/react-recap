import { useState } from "react";

const Counter = () => {
  const [counter, setCoutner] = useState(0);
  const increment = () => {
    setCoutner((prevSate) => prevSate + 1);
  };
  const decrement = () => {
    if (counter === 0) {
      alert("negative not possible");
      return;
    }
    setCoutner((prevSate) => prevSate - 1);
  };
  const reset = () => {
    setCoutner(0);
  };
  return (
    <div>
      <p>{counter}</p>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>0</button>
      </div>
    </div>
  );
};
export default Counter;
