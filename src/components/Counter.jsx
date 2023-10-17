import React, { useState } from "react";

export default function Counter() {
  let [number, setNumber] = useState(0);

  const handleClick2 = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  const handleClick = () => {
    setNumber(function (prevNumber) {
      return prevNumber - 1;
    });
  };

  return (
    <div className="counter-container">
      <div className="counter-text">{number}</div>
      <button className="counter-button" onClick={handleClick}>
        -
      </button>
      <button className="counter-button" onClick={handleClick2}>
        +
      </button>
    </div>
  );
}
