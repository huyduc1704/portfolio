"use client";
import { useState, useEffect } from 'react';
import styles from './Projects.module.css';
import Image from 'next/image';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'Skincare Product Sale System',
        description: 'Architected a robust e-commerce backend with 93+ RESTful APIs, featuring a dynamic Quiz Engine that analyzes user skin conditions. Designed a custom Tie-breaker logic to handle complex quiz results, ensuring high-precision product recommendations.',
        tech: ['Java', 'Spring Boot', 'MySQL', 'Stripe Integration'],
        image: '/images/projects/skincare-architecture.png',
        details: {
            overview: "A smart e-commerce platform that provides personalized skincare routines based on an automated diagnostic system.",
            coreFeature: "An intelligent Quiz Engine designed to identify user skin types through a data-driven approach.",
            challenge: {
                title: "Handling Tie-breaker Logic",
                scenario: "In many cases, quiz results end in a tie (e.g., 2 points for Oily skin, 2 points for Dry skin). Standard logic often fails or provides inaccurate results in these situations.",
                solution: "Engineered a dynamic Tie-breaker System. When a tie is detected, the system queries the database for \"Supplementary Questions\" specifically tagged with the tied skin types. Users answer these extra questions to reach a definitive, high-precision conclusion."
            },
            scale: "Developed and managed 93+ RESTful APIs to handle product management, quiz workflows, and seamless payment integration.",
            reflection: {
                limitations: "The current weighted-voting system is functional but can be further optimized for speed and accuracy in more complex medical scenarios.",
                enhancements: [
                    "Weighted Scoring System: Move from a simple count to a weighted system where certain \"critical\" questions have more influence on the final result.",
                    "AI Integration: Leverage Machine Learning models to analyze historical quiz data and user feedback to refine the diagnostic accuracy over time.",
                    "Caching Layer: Implement Redis to cache supplementary question sets, reducing database load during high-traffic quiz sessions."
                ]
            }
        }
    },
    {
        id: 2,
        title: 'Quốc Bảo Service',
        description: 'Developed a specialized warehouse management module for warranty services. Implemented an automated Partial Fulfillment workflow that triggers stock transfers and auto-generates Return Tickets for seamless inventory tracking between local and central warehouses.',
        tech: ['NodeJS', 'PostgreSQL', 'ExpressJS'],
        image: '/images/projects/locknlock-architecture.png',
        details: {
            overview: "Developed a specialized logistics and warranty platform for LocknLock, focusing on spare part tracking and fulfillment efficiency.",
            coreFeature: "To bridge the gap between local service stations and the central warehouse during the product repair process.",
            challenge: {
                title: "Handling Stock Discrepancies",
                scenario: "Local stations often lack specific spare parts, causing delays in warranty repairs and making inventory tracking difficult.",
                solution: "Engineered an automated Partial Fulfillment logic that monitors inventory in real-time. If local stock is insufficient: The system automatically triggers a Stock Transfer Request to the Central Warehouse. It simultaneously generates a Return Ticket in the database to ensure 100% accountability for the missing parts."
            },
            scale: "Designed a scalable PostgreSQL schema to handle high-frequency logistics data and administrative unit mapping (City/District/Ward).",
            reflection: {
                limitations: "System Transparency: Provided real-time status updates (e.g., \"Fully Issued\" vs. \"Partial Fulfillment\") for both administrators and technicians.",
                enhancements: [
                    "Automated Workflow: Reduced manual intervention by automating the \"Request-Transfer-Track\" cycle.",
                    "Reliability: Implemented robust seed data generators to ensure consistent system initialization across different environments."
                ]
            }
        }
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedProject]);

    return (
        <>
            <section id="projects" className={styles.projectsSection}>
                <div className={`container`}>
                    <h2 className="section-title">My Projects</h2>
                    <p className="section-subtitle">Some things I've built</p>

                    <div className={styles.projectsGrid}>
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className={styles.projectCard}
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className={styles.projectImageContainer}>
                                    {project.image && !project.image.endsWith('.jpg') ? (
                                        <Image
                                            src={project.image}
                                            alt={`${project.title} screenshot`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className={styles.projectImage}
                                        />
                                    ) : (
                                        <div className={styles.imagePlaceholder}>
                                            Project Image
                                        </div>
                                    )}
                                </div>

                                <div className={styles.projectContent}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectDescription}>{project.description}</p>

                                    <ul className={styles.techList}>
                                        {project.tech.map((tech, index) => (
                                            <li key={index} className={styles.techItem}>{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className={styles.closeModalBtn}
                                onClick={() => setSelectedProject(null)}
                                aria-label="Close modal"
                            >
                                <X size={24} />
                            </button>

                            <div className={styles.modalHeader}>
                                <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                                <div className={styles.modalTechList}>
                                    {selectedProject.tech.map((tech, index) => (
                                        <span key={index} className={styles.techItemModal}>{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.modalBody}>
                                {selectedProject.image && !selectedProject.image.endsWith('.jpg') && (
                                    <div className={styles.modalImageContainer}>
                                        <Image
                                            src={selectedProject.image}
                                            alt={`${selectedProject.title} Architecture`}
                                            fill
                                            className={styles.modalImage}
                                            sizes="(max-width: 1024px) 100vw, 800px"
                                        />
                                    </div>
                                )}

                                {selectedProject.details ? (
                                    <div className={styles.modalDetails}>
                                        <div className={styles.detailSection}>
                                            <h4>Project Overview</h4>
                                            <p><strong>The Mission:</strong> {selectedProject.details.overview}</p>
                                            <p><strong>Core Feature:</strong> {selectedProject.details.coreFeature}</p>
                                        </div>

                                        <div className={styles.detailSection}>
                                            <h4>The Technical Challenge: {selectedProject.details.challenge.title}</h4>
                                            <p><strong>The Scenario:</strong> {selectedProject.details.challenge.scenario}</p>
                                            <p><strong>My Solution:</strong> {selectedProject.details.challenge.solution}</p>
                                        </div>

                                        <div className={styles.detailSection}>
                                            <h4>System Scale</h4>
                                            <p>{selectedProject.details.scale}</p>
                                        </div>

                                        <div className={styles.detailSection}>
                                            <h4>{selectedProject.id === 2 ? "Key Technical Contributions" : "Critical Reflection & Future Improvements"}</h4>

                                            {selectedProject.id === 1 ? (
                                                <>
                                                    <p><strong>Current Limitations:</strong> {selectedProject.details.reflection.limitations}</p>
                                                    <p><strong>Proposed Enhancements (If I had more time):</strong></p>
                                                </>
                                            ) : (
                                                <>
                                                    <p><strong>{selectedProject.details.reflection.limitations.split(':')[0]}:</strong>{selectedProject.details.reflection.limitations.split(':')[1]}</p>
                                                </>
                                            )}

                                            <ul className={styles.enhancementsList}>
                                                {selectedProject.details.reflection.enhancements.map((enhancement, i) => {
                                                    const [title, desc] = enhancement.split(': ');
                                                    return (
                                                        <li key={i}>
                                                            <strong>{title}:</strong> {desc}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <p className={styles.fallbackDescription}>{selectedProject.description}</p>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
