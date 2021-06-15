import styles from "./TaskView.module.css";

interface props {
  tasks: string[];
}

const TaskView: React.FC<props> = (props) => {
  return (
    <div className={styles.TaskView}>
      {props.tasks.map((a) => (
        <p>{a}</p>
      ))}
    </div>
  );
};

export default TaskView;
