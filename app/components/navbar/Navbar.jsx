import React from "react";
import Image from "next/image";
import facebook from "../../../public/assets/images.jpeg";
import medium from "../../../public/medium1.png";
import github from "../../../public/github.png";
import linkedin from "../../../public/linkedin.png";
import gmail from "../../../public/gmail.png";
import "../navbar/navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
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
          Harshani Bandara
        </motion.span>
        <div className="social">
          <a href="https://medium.com/@harshanimadhushani51">
            <Image src={medium} alt="medium" className="social-img" />
          </a>
          <a href="https://github.com/HarshaniBandara">
            <Image src={github} alt="github" className="social-img" />
          </a>
          <a href="www.linkedin.com/in/harshanibandara">
            <Image src={linkedin} alt="linkedin" className="social-img" />
          </a>
          <a href="harshani.19@cse.mrt.ac.lk">
            <Image src={gmail} alt="gmail" className="social-img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
