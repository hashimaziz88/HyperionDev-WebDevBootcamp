import React from "react";
import { useState } from "react";
export default function Count() {
  // create a state variable count with an initial value of 0
  const [count, setCount] = useState(0);
  // Event handler for the button changes the value of the count state
  function increaseCount() {
    setCount(count + 1);
  }
  return (
    <div>
      {/* use JSX code to display the value of the count variable */}
      <h1>Count : {count}</h1>
      {/* Button to increase the value of the count variable */}
      <button onClick={increaseCount}> Increase Count </button>
    </div>
  );
}
