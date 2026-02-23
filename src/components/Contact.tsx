import styles from './Contact.module.css';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className={styles.contactSection}>
            <div className={`container ${styles.contactContainer}`}>
                <div className={styles.infoSide}>
                    <h2 className={styles.title}>Connect With Me</h2>
                    <p className={styles.subtitle}>Let's discuss your project or just say hi!</p>

                    <div className={styles.contactDetails}>
                        <div className={styles.detailItem}>
                            <Mail className={styles.icon} size={20} />
                            <a href="mailto:huyduc1704@gmail.com" className={styles.contactLink}>huyduc1704@gmail.com</a>
                        </div>
                        <div className={styles.detailItem}>
                            <Linkedin className={styles.icon} size={20} />
                            <a href="https://linkedin.com/in/huyndse161632" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>linkedin.com/in/huyndse161632</a>
                        </div>
                        <div className={styles.detailItem}>
                            <Github className={styles.icon} size={20} />
                            <a href="https://github.com/huyduc1704" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>github.com/huyduc1704</a>
                        </div>
                    </div>
                </div>

                <div className={styles.formSide}>
                    <form className={styles.contactForm}>
                        <div className={styles.formGroup}>
                            <input type="text" placeholder="Your Name" required className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <input type="email" placeholder="Your Email" required className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <textarea placeholder="Your Message" rows={4} required className={styles.textarea}></textarea>
                        </div>
                        <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>

            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footerContent}>
                        <div className={styles.footerLogo}>Huy Nguyen Duc</div>
                        <p className={styles.copyright}>© 2026 Huy Nguyen Duc. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </section>
    );
}
