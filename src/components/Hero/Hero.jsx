import styles from './Hero.module.css'
import { heroData } from './heroData';

export const Hero = () => {
    return(
        <section className={styles.wrapper}>
            <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>Design solutions made easy</h1>
                <p className={styles.heroDescription}>With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
            </div>
            <div className={styles.heroGridContainer}>
        {heroData.map((item) => {
            return(
                <div key={item.key} className={styles.heroGridItem} style={{backgroundColor:` var(--${item.background})`}}>
                    <img src={item.image} alt={item.title}/>
                    <h2>{item.title}</h2>
                </div>
            )
        })}

            </div>
        </section>
    )
}