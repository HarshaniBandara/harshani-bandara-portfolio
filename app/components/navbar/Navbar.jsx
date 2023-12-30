import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Developer
        </motion.span>
        <div className="social">
        <a href="https://medium.com/@harshanimadhushani51">
            <img src='./mediumcolor.png' alt="medium" className="social-img" />
          </a>
          <a href="https://github.com/HarshaniBandara">
            <img src='./github.png' alt="github" className="social-img" />
          </a>
          <a href="www.linkedin.com/in/harshanibandara">
            <img src='./linkedin.png' alt="linkedin" className="social-img" />
          </a>
          <a href="harshani.19@cse.mrt.ac.lk">
            <img src='./gmail.png' alt="gmail" className="social-img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
