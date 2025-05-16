import React, { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="app">
      <div className="counter-box">
        <h1>Simple Counter</h1>
        <div className="count">{count}</div>
        <button onClick={increment}>+</button>
      </div>
    </div>
    </>
  )
}

export default App
