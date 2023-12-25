"use client";
import React from "react";
import Image from "next/image";
import facebook from "../../../public/assets/images.jpeg";
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
          Lama Dev
        </motion.span>
        <div className="social">
          <a href="#">
            <Image src={facebook} alt="facebook" className="social-img" />
          </a>
          <a href="#">
            <Image src={facebook} alt="facebook" className="social-img" />
          </a>
          <a href="#">
            <Image src={facebook} alt="facebook" className="social-img" />
          </a>
          <a href="#">
            <Image src={facebook} alt="facebook" className="social-img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
