import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <div className="po">
        <motion.h3 style={{ y: yText }}>
          {type === "services" ? "Experience" : "Education"}
        </motion.h3>

        <p>Dialog axiata PLC</p>
        <ul>
          <li>Tranee Software Engineer</li>
          <li>from 2023.01.02 - 2023.06.30 (6 months)</li>
          <li></li>
        </ul>

        <br />
        <p>University of Moratuwa</p>
        <ul>
          <li>visiting Teaching Assistent</li>
          <li>from 2023.01.02 - 2023.06.30 (6 months)</li>
          <li>
            Modules :
            <ul>
              <li>Data Base Management System</li>
              <li>Programming Fundermentals</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* <motion.div className="mountains"></motion.div> */}
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
