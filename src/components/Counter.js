import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);

  const handleDecrement = () => setCount(count - 1);

  return (
    <div>
      <h2>Counter </h2>
      <h3>{count}</h3>
      <Button increment={handleDecrement} value={"-"} />
      <Button decrement={handleIncrement} value={"+"} />
    </div>
  );
};

export default Counter;
