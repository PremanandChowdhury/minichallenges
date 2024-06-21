import React, { useState } from 'react';
import './styles.css';

export function Counter() {
  const [output, setOutput] = useState(0);
  const [inputVal, setInputVal] = useState(1);

  const incHandler = () => {
    setOutput((prev) => prev + Number(inputVal));
  };

  const decHandler = () => {
    setOutput((prev) => prev - inputVal);
  };

  const handleReset = () => {
    setOutput(0);
    setInputVal(1);
  };

  return (
    <div className="container">
      <div
        style={{
          textAlign: "center",
          marginBottom: "10px",
          fontWeight: "bold",
        }}>
        {output}
      </div>

      <div className="btnContainer">
        <button onClick={decHandler} aria-label="Decrement">
          -
        </button>
        <button onClick={incHandler} aria-label="Increment">
          +
        </button>
      </div>

      <div className="inputContainer">
        <label className="label">Incerement/ Decrement by </label>
        <input
          type="number"
          id="step"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          title="Step value"
        />
      </div>

      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
