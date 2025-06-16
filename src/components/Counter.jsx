import { useState } from "react";

export function Tiriye() {
  let [count, setCount] = useState(0); // initialize with 0
  count=500;

  const increment = () => {
    setCount(count + 1); // updates state
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}


