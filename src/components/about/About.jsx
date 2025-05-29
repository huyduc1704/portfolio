import { useRef } from "react";
import "./About.scss";
import { motion, useInView } from "framer-motion";
import { FaJava, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiPostman } from "react-icons/si";

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const skillVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const skills = [
    { name: "Java", icon: <FaJava size={30} /> },
    { name: "Spring Boot", icon: <SiSpringboot size={30} /> },
    { name: "MySQL", icon: <SiMysql size={30} /> },
    { name: "RESTful API", icon: <SiPostman size={30} /> },
    { name: "Git", icon: <FaGitAlt size={30} /> },
    { name: "Docker", icon: <FaDocker size={30} /> },
    { name: "React", icon: <FaReact size={30} /> },
  ];

  const experiences = [
    {
      year: "2025",
      title: "Backend Developer",
      company: "Personal Projects",
      desc: "Developed backend systems for skincare e-commerce and spa booking applications, focusing on API design, authentication, and database optimization.",
    },
    {
      year: "2024",
      title: "Intern Developer",
      company: "FPT Software Academy",
      desc: "Built internal log management system APIs, handled user authentication, and implemented data tracking functionality.",
    },
    {
      year: "2020",
      title: "Software Engineering Student",
      company: "FPT University",
      desc: "Focused on core programming concepts, algorithms, and database fundamentals while participating in coding competitions.",
    },
  ];

  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="profile" variants={variants}>
        <div className="left">
          <div className="imgContainer">
            <img src="avatar.jpg" alt="Developer working" />
          </div>
        </div>
        <div className="right">
          <motion.h1 variants={variants}>About Me</motion.h1>
          <motion.p variants={variants}>
            I'm Nguyen Duc Huy, a backend developer based in Ho Chi Minh City. I
            specialize in building RESTful APIs, secure authentication systems,
            and scalable backend architectures using Java, Spring Boot, and
            MySQL.
          </motion.p>
          <motion.p variants={variants}>
            My current focus is developing backend systems for real-world
            applications, including e-commerce and consultation platforms. I'm
            familiar with version control using Git, planning for deployment via
            Docker and VPS, and continuously exploring new technologies like
            Web3 and C++ for system integration.
          </motion.p>
          <motion.p variants={variants}>
            My goal is to become a backend engineer with strong system design
            thinking and hands-on production experience. I'm currently working
            on personal projects to enhance my DevOps and system scalability
            skills.
          </motion.p>

          <motion.a
            href="/NguyenDucHuy_Resume.pdf"
            download="NguyenDucHuy_Resume.pdf"
            className="downloadBtn"
            variants={variants}
          >
            <motion.button variants={variants}>Download CV</motion.button>
          </motion.a>
        </div>
      </motion.div>

      <motion.div className="skills" variants={variants}>
        <motion.h2 variants={variants}>My Skills</motion.h2>
        <div className="skillContainer">
          {skills.map((skill, index) => (
            <motion.div
              className="skillBar"
              key={index}
              variants={skillVariants}
              custom={index}
              whileHover={{ scale: 1.05 }}
            >
              <div className="skillInfo">
                <div className="skillIcon">{skill.icon}</div>
                <span className="skillName">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
