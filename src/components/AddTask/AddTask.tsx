import { useState, useRef, RefObject } from "react";
import styles from "./AddTask.module.css";

interface addTaskProps {
  addTask: (task: string) => void;
}

const AddTask: React.FC<addTaskProps> = ({ addTask }) => {
  const submitButttonRef = useRef<HTMLButtonElement>(null);
  const [task, setTask] = useState("");

  const formSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };

  return (
    <form className={styles.addTask} onSubmit={formSubmitHandler}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add task here..."
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
        <button hidden type="submit" ref={submitButttonRef}>
          Add
        </button>
        <div
          className={styles.button}
          onClick={() => submitButttonRef.current?.click()}
        >
          Add
        </div>
      </div>
    </form>
  );
};

export default AddTask;
