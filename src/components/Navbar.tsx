import styles from './Navbar.module.css';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <div className={styles.logo}>
                    Huy <span className={styles.logoAccent}>ND</span>
                </div>

                <ul className={styles.navLinks}>
                    <li className={styles.active}><Link href="#home">Home</Link></li>
                    <li><Link href="#skills">Skills</Link></li>
                    <li><Link href="#experience">Experience</Link></li>
                    <li><Link href="#projects">Projects</Link></li>
                    <li><Link href="#resumes">Resumes</Link></li>
                </ul>

                <button className={styles.contactBtn} aria-label="Contact">
                    <MessageSquare size={20} />
                </button>
            </div>
        </nav>
    );
}
