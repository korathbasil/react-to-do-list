import styles from "./TaskCard.module.css";

import { Task } from "../../models";

interface taskProps {
  task: Task;
  deleteTask: (id: string) => void;
}

const TaskCard: React.FC<taskProps> = ({ task, deleteTask }) => {
  return (
    <div style={{ background: task.cardColor }} className={styles.task}>
      <h3>{task.taskText}</h3>
      <div className={styles.actions}>
        <button className={styles.actionButton}>Mark as Complete</button>
        <button
          onClick={() => deleteTask(task.id)}
          className={styles.actionButton}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
