import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          HuyND
        </motion.span>
        <div className="social">
          <a
            href="https://www.facebook.com/nguyen.uc.huy.982417/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.png" alt="" />
          </a>
          <a
            href="https://github.com/huyduc1704"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/huyndse161632/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
