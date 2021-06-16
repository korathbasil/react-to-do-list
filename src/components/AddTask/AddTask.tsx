import { useState, useRef } from "react";
import styles from "./AddTask.module.css";

import ClearIcon from "../../assets/clear-icon-outlined.png";

interface addTaskProps {
  addTask: (task: string) => void;
}

const AddTask: React.FC<addTaskProps> = ({ addTask }) => {
  const submitButttonRef = useRef<HTMLButtonElement>(null);
  const addTaskRef = useRef<HTMLDivElement>(null);
  const [task, setTask] = useState("");

  const formSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };
  const form = document.querySelector(".addTask") as HTMLFormElement;

  return (
    <div className={styles.addTask} ref={addTaskRef}>
      <form id="inputTaskForm" onSubmit={formSubmitHandler}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={task}
            onChange={(e) => {}}
            placeholder="Add task here..."
          />
          <img src={ClearIcon} alt="" onClick={() => setTask("")} />
        </div>
        <div className={styles.colorPicker}>
          <div
            className={styles.colorCircle}
            onClick={() => {
              if (addTaskRef.current !== null) {
                addTaskRef.current.style.background =
                  "linear-gradient(135deg, rgba(226,85,185,1) 0%, rgba(105,16,99,1) 100%)";
              }
            }}
          ></div>
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
    </div>
  );
};

export default AddTask;
