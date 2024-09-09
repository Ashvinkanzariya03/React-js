import React from 'react'
import { useState } from "react";


function CounterApp() {
    const [count, setCount] = useState(0);

    const Increment = () => {
      setCount(count + 1);
    };
    const Decrement = () => {
      setCount(count - 1);
    };
  return (
    <div >
    <div className="main">
      <div>
        <div className="my-5">
          {" "}
          <h1>Counter App</h1>
        </div>
        <div>
          <h1>{count}</h1>
        </div>
        <div className="my-5">
          <button onClick={Increment} className=" btn btn-success mx-3 ">
            Increment
          </button>
          <button onClick={Decrement} className="btn btn-danger">
            Decrement
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CounterApp
