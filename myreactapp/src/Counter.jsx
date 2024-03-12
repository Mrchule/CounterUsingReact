import React, { useState } from "react";
import "./Counter.css"
export default function Counter() {
  const [a, setCounter] = useState(0);

  function increase() {
    setCounter(a + 1);
  }

  function decrease() {
    setCounter(a - 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <div className="containe">
      <h1>{a}</h1>
      <div className="btn">
        <button onClick={increase}>Increase</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrease}>decrease</button>
      </div>
    </div>
  );
}
