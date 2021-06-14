import React, { useState } from "react";

import "./App.css";
import List from "./components/List/List";

function App() {
  const [names, setNames] = useState([
    "Bazil",
    "James",
    "Rafeeq",
    "John",
    "Albert",
  ]);
  return (
    <div className="App">
      {names.map((name) => (
        <List name={name} />
      ))}
    </div>
  );
}

export default App;
