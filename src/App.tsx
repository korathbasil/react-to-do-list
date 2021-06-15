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
    <div className="app">
      <div className="app-container">
        <div className="app-left"></div>
        <div className="app-right"></div>
      </div>
    </div>
  );
}

export default App;
