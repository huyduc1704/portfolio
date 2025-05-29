import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import homeImg from "/swp/Home.png";
import manxiImg from "/manxi.png";
const items = [
  {
    id: 1,
    title: "Skincare Commerce",
    img: homeImg,
    desc: "A fullstack skincare e-commerce platform with complete backend features including user authentication (JWT), cart and order management, Stripe payment integration, and a custom skin type quiz system with dynamic question flow and admin management tools. Developed with Spring Boot, MySQL, and ReactJS. Deployed on Azure (backend) and Vercel (frontend).",
    source: "https://gitlab.com/group074/",
  },
  {
    id: 2,
    title: "Internal Log Management (FPT Software Academy)",
    img: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "A backend-focused internship project at FPT Software Academy. Designed and implemented RESTful APIs using Spring Boot and MySQL for tracking report update history and managing instructor skill profiles. Worked in a team using Git and ReactJS. Project source and demo are private due to internal use.",
  },
  {
    id: 3,
    title: "Spa Booking System (In Progress)",
    img: manxiImg,
    desc: "A spa website focused on user-friendly appointment booking and service discovery. Currently in UI development phase using ReactJS and GSAP. Planned backend features include booking management, admin dashboard, Web3-based loyalty program, and AI-powered skin analysis using C++.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.id === 1 && (
              <a href={item.source} target="_blank" rel="noopener noreferrer">
                <button>See Source Code</button>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
