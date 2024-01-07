import styles from "./Navbar.module.css";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

export const Navbar = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <img src="./logo.svg" alt=""/>
        <button role="button">Free consultation
        
        </button>
      </nav>
    </header>
  );
};
