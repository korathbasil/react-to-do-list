import { useState, useRef } from "react";

import styles from "./AddTask.module.css";
import ClearIcon from "../../assets/clear-icon-outlined.png";
import { Task } from "../../models";

interface addTaskProps {
  addTask: (task: Task) => void;
}

const AddTask: React.FC<addTaskProps> = ({ addTask }) => {
  const submitButttonRef = useRef<HTMLButtonElement>(null);
  const addTaskRef = useRef<HTMLDivElement>(null);

  const [task, setTask] = useState("");
  const [selectedColor, setSelectedColor] = useState(
    "linear-gradient(135deg, rgba(10,176,163,1) 0%, rgba(0,22,255,1) 100%)"
  );

  const formSubmitHandler = (e: React.SyntheticEvent) => {
    const date = new Date().toISOString();
    e.preventDefault();
    if (task !== "") {
      addTask({
        id: date,
        taskText: task,
        cardColor: selectedColor,
        isCompleted: false,
      });
      setTask("");
    }
  };

  return (
    <div className={styles.addTask} ref={addTaskRef}>
      <form id="inputTaskForm" onSubmit={formSubmitHandler}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            placeholder="Add task here..."
          />
          <img src={ClearIcon} alt="" onClick={() => setTask("")} />
        </div>
        <div className={styles.colorsAndAction}>
          <div className={styles.colorPicker}>
            <div
              className={styles.colorCircle}
              onClick={() => {
                if (addTaskRef.current !== null) {
                  addTaskRef.current.style.background =
                    "linear-gradient(135deg, rgba(10,176,163,1) 0%, rgba(0,22,255,1) 100%)";
                  setSelectedColor(
                    "linear-gradient(135deg, rgba(10,176,163,1) 0%, rgba(0,22,255,1) 100%)"
                  );
                }
              }}
            ></div>
            <div
              className={styles.colorCircle}
              onClick={() => {
                if (addTaskRef.current !== null) {
                  addTaskRef.current.style.background =
                    "linear-gradient(135deg, rgba(43,207,94,1) 0%, rgba(8,88,48,1) 100%)";
                  setSelectedColor(
                    "linear-gradient(135deg, rgba(43,207,94,1) 0%, rgba(8,88,48,1) 100%)"
                  );
                }
              }}
            ></div>
            <div
              className={styles.colorCircle}
              onClick={() => {
                if (addTaskRef.current !== null) {
                  addTaskRef.current.style.background =
                    "linear-gradient(135deg, rgba(238,57,57,1) 0%, rgba(88,8,8,1) 100%)";
                  setSelectedColor(
                    "linear-gradient(135deg, rgba(238,57,57,1) 0%, rgba(88,8,8,1) 100%)"
                  );
                }
              }}
            ></div>
            <div
              className={styles.colorCircle}
              onClick={() => {
                if (addTaskRef.current !== null) {
                  addTaskRef.current.style.background =
                    "linear-gradient(135deg, rgba(197,238,57,1) 0%, rgba(92,105,16,1) 100%)";
                  setSelectedColor(
                    "linear-gradient(135deg, rgba(197,238,57,1) 0%, rgba(92,105,16,1) 100%)"
                  );
                }
              }}
            ></div>
            <div
              className={styles.colorCircle}
              onClick={() => {
                if (addTaskRef.current !== null) {
                  addTaskRef.current.style.background =
                    "linear-gradient(135deg, rgba(226,85,185,1) 0%, rgba(105,16,99,1) 100%)";
                  setSelectedColor(
                    "linear-gradient(135deg, rgba(226,85,185,1) 0%, rgba(105,16,99,1) 100%)"
                  );
                }
              }}
            ></div>
            <div className={styles.colorCircle}></div>
          </div>
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
