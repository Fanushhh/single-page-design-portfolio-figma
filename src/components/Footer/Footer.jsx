import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerTextWrapper}>
            <div className={styles.footerText}>
                <h3 className={styles.footerTitle}>Book a call with me</h3>
                <p>
                    I’d love to have a chat to see how I can help you. The best first
                    step is for us to discuss your project during a free consultation.
                    Then we can move forward from there.
                </p>
            </div>
            <button className={styles.footerButton}>Free consultation</button>
      </div>
      <div className={styles.navbar}>
        <img src="./logo.svg" />
        <button>Free consultation</button>
      </div>
    </footer>
  );
}
