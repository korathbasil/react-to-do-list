import styles from "./TaskCard.module.css";

const TaskCard: React.FC<{ task: string }> = ({ task }) => {
  return (
    <div className={styles.task}>
      <h3>{task}</h3>
      <div className={styles.actions}>
        <button className={styles.actionButton}>Mark as Complete</button>
        <button className={styles.actionButton}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
