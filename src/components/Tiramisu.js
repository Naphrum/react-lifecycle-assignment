import React, { useEffect, useState } from "react";
import tiramisu from "../assets/tiramisu.png";

const Tiramisu = ({ handleClick }) => {
  const [count, setCount] = useState(1);
  const [tiramisuPerSecond, setTiramisuPerSecond] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (tiramisuPerSecond > 0) {
        setCount(count + tiramisuPerSecond);
      }
    }, 1000);
    return () => {
      console.log("count unmounted");
      clearInterval(interval);
    };
  }, [count, tiramisuPerSecond, setCount]);
  return (
    <div>
      <input
        type="number"
        value={tiramisuPerSecond}
        onChange={(event) => {
          setTiramisuPerSecond(Number(event.target.value));
        }}
      ></input>
      <p>Tiramisu per second</p>
      <img onClick={() => setCount(count + 1)} alt="Tiramisu" src={tiramisu} />
      <p>You have {count} tiramisu</p>
      <button onClick={handleClick}>End Game</button>
    </div>
  );
};

export default Tiramisu;
