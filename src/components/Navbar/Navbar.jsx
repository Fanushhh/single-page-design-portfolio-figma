import styles from "./Navbar.module.css";


export const Navbar = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <img src="./logo.svg"/>
        <button>Free consultation</button>
      </nav>
    </header>
  );
};
