import styles from './Hero.module.css';
import { Send } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className={styles.heroSection}>
            <div className={`container ${styles.heroContainer}`}>
                <p className={styles.greeting}>Hi, I am</p>
                <h1 className={styles.title}>
                    Huy <span className={styles.titleAccent}>Nguyen Duc</span>
                </h1>
                <h2 className={styles.subtitle}>Backend Developer</h2>
                <p className={styles.description}>
                    I am a backend developer with experience in building scalable and maintainable web applications.
                </p>
            </div>
        </section>
    );
}
