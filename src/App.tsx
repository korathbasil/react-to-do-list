import React, { useState } from "react";
import { AnimatedList } from "react-animated-list";

import "./App.css";
import Header from "./components/Header/Header";
import AddTask from "./components/AddTask/AddTask";
import TaskCard from "./components/TaskCard/TaskCard";
import { Task } from "./models";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };
  const deleteTask = (id: string) => {
    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasks);
  };
  const completeTask = (id: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = true;
        return task;
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <div className="app-container">
        <div className="app-left">
          <Header />
          <AddTask addTask={addTask} />
        </div>
        <div className="app-right">
          <AnimatedList animation={"grow"}>
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                completeTask={completeTask}
                deleteTask={deleteTask}
              />
            ))}
          </AnimatedList>
        </div>
      </div>
    </div>
  );
};

export default App;
