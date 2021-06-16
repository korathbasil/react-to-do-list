import styles from "./TaskCard.module.css";

import { Task } from "../../models";

interface taskProps {
  task: Task;
}

const TaskCard: React.FC<taskProps> = ({ task }) => {
  return (
    <div style={{ background: task.cardColor }} className={styles.task}>
      <h3>{task.taskText}</h3>
      <div className={styles.actions}>
        <button className={styles.actionButton}>Mark as Complete</button>
        <button className={styles.actionButton}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
