import React from "react";
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  function increasefunc() {
    setCount(count + 1);
  }

  function decreasefunc() {
    setCount(count - 1);
  }
  function resetfunc() {
    setCount(0);
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={increasefunc}>increase</button>
      <button onClick={decreasefunc}>decrease</button>
      <button onClick={resetfunc}>reset</button>
    </>
  );
}
export { Counter };
