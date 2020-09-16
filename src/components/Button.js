import React from "react";

const Button = ({ decrement, increment, value }) => {
  return (
    <button
      onClick={() => (increment ? increment() : decrement())}
      style={{ padding: "5px", margin: "5px", width: "5%" }}
    >
      {value}
    </button>
  );
};

export default Button;
