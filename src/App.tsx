import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import AddTask from "./components/AddTask/AddTask";
import TaskCard from "./components/TaskCard/TaskCard";
import List from "./components/List/List";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="app">
      <div className="app-container">
        <div className="app-left">
          <Header />
          <AddTask addTask={addTask} />
        </div>
        <div className="app-right">
          {tasks.map((task) => (
            <TaskCard task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
