import React from "react";
import "./App.css";
import Counter from "./Counter";
import Users from "./Users";

function App() {
  return (
    <div className="App">
      <h1>Introduction to React Hooks</h1>
      <Counter />
      <Users id={10} />
    </div>
  );
}

export default App;
