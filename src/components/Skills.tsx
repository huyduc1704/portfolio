import styles from './Skills.module.css';
import Image from 'next/image';

const skills = [
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'Google Cloud', icon: '/icons/google-cloud.svg' },
    { name: 'Azure', icon: '/icons/azure.png' },
    { name: 'Spring Boot', icon: '/icons/spring-boot.png' },
    { name: 'Java', icon: '/icons/java.png' },
    { name: 'MySQL', icon: '/icons/mysql.png' },
    { name: 'PostgreSQL', icon: '/icons/postgresql.png' },
    { name: 'SQL Server', icon: '/icons/sql-server.png' },
    { name: 'ReactJS', icon: '/icons/reactjs.png' },
    { name: 'NextJS', icon: '/icons/nextjs.png' },
    { name: 'NodeJS', icon: '/icons/nodejs.png' },
];

export default function Skills() {
    return (
        <section id="skills" className={styles.skillsSection}>
            <div className={`container`}>
                <h2 className="section-title">Technical Skills</h2>
                <p className="section-subtitle">Technologies I work with on a daily basis</p>

                <div className={styles.skillsGrid}>
                    {skills.map((skill) => (
                        <div key={skill.name} className={styles.skillCard}>
                            <div className={styles.iconWrapper}>
                                <Image src={skill.icon} alt={skill.name} width={32} height={32} />
                            </div>
                            <span className={styles.skillName}>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
