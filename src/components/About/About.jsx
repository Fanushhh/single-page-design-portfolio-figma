import styles from './About.module.css';

export default function About() {

    return(
        <section className={styles.wrapper}>
            <div className={styles.imageContainer}>
                <img src='./image-amy.webp' alt="Profile image for Amy, the owner of the website" />
            </div>
            <div className={styles.textContainer}>
                <h2>I’m Amy, and I’d love to work on your next project</h2>
                <p>I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
                <button>Free consultation</button>
            </div>
        </section>
    )

}