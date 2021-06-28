import { Task } from "../../models";
import styles from "./TaskCard.module.css";

interface taskProps {
  task: Task;
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
}

const TaskCard: React.FC<taskProps> = ({ task, completeTask, deleteTask }) => {
  return (
    <div
      key={task.id}
      style={{ background: task.isCompleted ? "" : task.cardColor }}
      className={styles.task}
    >
      <h3 style={{ textDecoration: task.isCompleted ? "line-through" : "" }}>
        {task.taskText}
      </h3>
      <div className={styles.actions}>
        {!task.isCompleted && (
          <button
            onClick={() => {
              completeTask(task.id);
            }}
            className={styles.actionButton + " firstButton"}
            style={{ backgroundColor: "green" }}
          >
            Mark as Complete
          </button>
        )}
        <button
          onClick={() => deleteTask(task.id)}
          className={styles.actionButton}
          style={{ backgroundColor: "red" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
