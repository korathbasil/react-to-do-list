import { useState } from "react";
import styles from "./AddTask.module.css";

interface addTaskProps {
  addTask: (task: string) => void;
}

const AddTask: React.FC<addTaskProps> = (props) => {
  const [task, setTask] = useState("");
  return (
    <div className={styles.addTask}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className={styles.colorPicker}>
        <div className={styles.colorCircle}></div>
        <div className={styles.colorCircle}></div>
        <div className={styles.colorCircle}></div>
        <div className={styles.colorCircle}></div>
        <div className={styles.colorCircle}></div>
        <div className={styles.colorCircle}></div>
      </div>
      <div className={styles.action}>
        <button onClick={() => props.addTask(task)}>Add</button>
      </div>
    </div>
  );
};

export default AddTask;
