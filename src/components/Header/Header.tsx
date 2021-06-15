import styles from "./Header.module.css";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="" className={styles.img} />
      <h1>Tasker-X</h1>
    </div>
  );
};

export default Header;
