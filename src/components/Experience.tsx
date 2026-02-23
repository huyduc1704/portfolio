import styles from './Experience.module.css';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

type ExperienceItem = {
    id: string;
    title: string;
    company: string;
    position?: string;
    description: (string | React.ReactNode)[];
    mockup: string;
    link: string | null;
};

const groupALiveDemos: ExperienceItem[] = [
    {
        id: 'A1',
        title: 'Additiv3 Startup Landing Page',
        company: 'Live Demo',
        description: [
            <span key="1"><strong>The Challenge:</strong> Creating a modern, high-conversion landing page for a 3D printing startup.</span>,
            <span key="2"><strong>Solution:</strong> Engineered smooth visual experiences using Next.js and GSAP scroll animations. Integrated Resend API for automated lead generation.</span>,
            <span key="3"><strong>Tech Stack:</strong> Next.js, GSAP.</span>
        ],
        mockup: 'Live Preview Available',
        link: 'https://additiv3.com'
    }
];

const groupBTechCaseStudies: ExperienceItem[] = [
    {
        id: 'B1',
        title: 'Skincare Product System',
        company: 'Backend Development',
        description: [
            <span key="1"><strong>The Challenge:</strong> Building a high-scale e-commerce backend with 93+ RESTful APIs and a complex skin-type quiz engine.</span>,
            <span key="2"><strong>Solution:</strong> Engineered a custom Tie-breaker Logic to resolve tied quiz results by dynamically fetching supplementary questions.</span>,
            <span key="3"><strong>Tech Stack:</strong> Java Spring Boot, MySQL, Stripe Integration.</span>
        ],
        mockup: 'Architecture Diagram / API Specs',
        link: null
    },
    {
        id: 'B2',
        title: 'Spa Management & Booking',
        company: 'Backend & Integration',
        description: [
            'Designed robust data models using MongoDB for flexible scheduling and booking management.',
            'Integrated Zalo Social Auth flow for seamless user onboarding and login.',
        ],
        mockup: 'Zalo Auth Flow & DB Schema Diagram (Mockup)',
        link: null
    },
    {
        id: 'B3',
        title: 'DSEV Sport',
        company: 'Fullstack Execution',
        description: [
            'Developed comprehensive Management Dashboard for sports facilities.',
            'Integrated SePay API to automatically verify and confirm transactions safely and accurately.',
        ],
        mockup: 'Dashboard Mockup & SePay Flow Diagram',
        link: null
    },
    {
        id: 'B4',
        title: 'Warehouse Management - LocknLock',
        company: 'Quốc Bảo Service',
        position: 'Backend Developer',
        description: [
            <span key="1"><strong>The Challenge:</strong> Managing spare part logistics for a global brand (LocknLock) across multiple local stations.</span>,
            <span key="2"><strong>Solution:</strong> Implemented an automated Partial Fulfillment workflow. If local stock is low, the system triggers a central transfer and auto-generates a Return Ticket for tracking.</span>,
            <span key="3"><strong>Tech Stack:</strong> NodeJS (ExpressJS), PostgreSQL.</span>
        ],
        mockup: 'Inventory Transfer State Machine',
        link: null
    },
    {
        id: 'B5',
        title: 'Instructor Schedule Tracking',
        company: 'FPT Software Academy',
        position: 'Fullstack Developer',
        description: [
            'Developed both the Backend API and Frontend interface for tracking instructor teaching schedules.',
            'Built logging and CRUD APIs to record modifications, deletions, and additions to schedules.',
            'Created responsive tables and forms to interact with these APIs using ReactJS and Ant Design.',
        ],
        mockup: 'Ant Design Table & Logging UI Mockup',
        link: null
    }
];

export default function Experience() {
    return (
        <section id="experience" className={styles.experienceSection}>
            <div className={`container`}>
                <h2 className="section-title">Timeline & Case Studies</h2>
                <p className="section-subtitle">A detailed breakdown of my projects and technical experiments</p>

                <div className={styles.groupContainer}>
                    <h3 className={styles.groupTitle}>Live Demo</h3>
                    <div className={styles.timeline}>
                        {groupALiveDemos.map((exp) => (
                            <div key={exp.id} className={styles.timelineItem}>
                                <div className={styles.timelineDate}>
                                    <div className={styles.mockupPlaceholder}>
                                        {exp.mockup}
                                    </div>
                                </div>

                                <div className={styles.timelineContent}>
                                    <div className={styles.timelineDot}></div>

                                    <div className={styles.experienceCard}>
                                        <div className={styles.cardHeader}>
                                            <div>
                                                <h3 className={styles.jobTitle}>{exp.title}</h3>
                                                <h4 className={styles.companyName}>
                                                    {exp.company}
                                                    {exp.position && ` - ${exp.position}`}
                                                    {exp.link && (
                                                        <a href={exp.link} target="_blank" rel="noopener noreferrer" aria-label="Live Demo Link">
                                                            <ExternalLink size={14} className={styles.linkIcon} />
                                                        </a>
                                                    )}
                                                </h4>
                                            </div>
                                        </div>

                                        <ul className={styles.jobDescription}>
                                            {exp.description.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.groupContainer} style={{ marginTop: '4rem' }}>
                    <h3 className={styles.groupTitle}>Technical Case Studies</h3>
                    <div className={styles.timeline}>
                        {groupBTechCaseStudies.map((exp) => (
                            <div key={exp.id} className={styles.timelineItem}>
                                <div className={styles.timelineDate}>
                                    <div className={styles.mockupPlaceholder}>
                                        {exp.mockup}
                                    </div>
                                </div>

                                <div className={styles.timelineContent}>
                                    <div className={styles.timelineDot}></div>

                                    <div className={styles.experienceCard}>
                                        <div className={styles.cardHeader}>
                                            <div>
                                                <h3 className={styles.jobTitle}>{exp.title}</h3>
                                                <h4 className={styles.companyName}>
                                                    {exp.company}
                                                    {exp.position && ` - ${exp.position}`}
                                                </h4>
                                            </div>
                                        </div>

                                        <ul className={styles.jobDescription}>
                                            {exp.description.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
