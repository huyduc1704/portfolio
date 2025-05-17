import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I specialize in building secure and scalable backend systems,
          <br /> powering seamless user experiences through efficient APIs.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img
            src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Backend Architecture"
          />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Scalable</motion.b>{" "}
            Backends
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Applications.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>API Development</h2>
          <p>
            Design and build RESTful APIs with Spring Boot and Java, optimized
            for performance, security, and clean architecture.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Database Design</h2>
          <p>
            Schema modeling, data normalization, and optimized queries using
            MySQL. Capable of designing scalable data structures for real-world
            use cases.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Authentication</h2>
          <p>
            Implement secure login systems using JWT, role-based access control,
            and custom permission handling for admin/user separation.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Deployment & VPS Setup</h2>
          <p>
            Planning backend deployment using Docker, Nginx, and SSL on VPS
            (Ubuntu). Familiar with production-ready setup and monitoring
            basics.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
