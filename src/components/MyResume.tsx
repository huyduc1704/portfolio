import styles from './MyResume.module.css';

export default function MyResume() {
    return (
        <section id="resumes" className={styles.resumeSection}>
            <div className={`container`}>
                <h2 className="section-title">My Resume</h2>
                <p className="section-subtitle">A brief overview of my professional document</p>

                <div className={styles.resumeContainer}>
                    <div className={styles.resumeCard}>
                        {/* Using a placeholder div for the resume image/iframe for now */}
                        <iframe
                            src="/resume/NguyenDucHuyResume.pdf#toolbar=0&navpanes=0"
                            className={styles.resumePreview}
                            title="Nguyen Duc Huy Resume"
                        />
                    </div>
                </div>

                <div className={styles.downloadBtnWrapper}>
                    <a href="/resume/NguyenDucHuyResume.pdf" download="NguyenDucHuyResume.pdf">
                        <button className="btn-primary">Download</button>
                    </a>
                </div>
            </div>
        </section>
    );
}
