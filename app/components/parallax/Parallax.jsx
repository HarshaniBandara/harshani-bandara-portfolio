import { useRef, useState } from "react";
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
  const [experience,setExperience]=useState(false)
  const [skills,setSkills]=useState(false)
  const [education,setEducation]=useState(false)

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
        {/* <motion.h3 style={{ y: yText }}>
          {type === "services" ? "Experience" : "Education"}
        </motion.h3> */}
        {type === "services" && (
          // <div>
          //   {" "}
          //   <p>Dialog axiata PLC</p>
          //   <ul>
          //     <li>&nbsp; &nbsp; &nbsp;&nbsp;Trainee Software Engineer</li>
          //     <li>&nbsp; &nbsp; &nbsp;&nbsp;from 2023.01.02 - 2023.06.30 (6 months)</li>
          //     <li></li>
          //   </ul>
          //   <br />
          //   <p>University of Moratuwa</p>
          //   <ul>
          //     <li>&nbsp; &nbsp; &nbsp;&nbsp;visiting Teaching Assistent</li>
          //     <li>&nbsp; &nbsp; &nbsp;&nbsp;from 2023.01.02 - 2023.06.30 (6 months)</li>
          //     <li>
          //     &nbsp; &nbsp; &nbsp;&nbsp;Modules :
          //       <ul>
          //         <li>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Data Base Management System</li>
          //         <li>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Programming Fundermentals</li>
          //       </ul>
          //     </li>
          //   </ul>
          // </div>
          <div className="container">
            <div className="row">
              <div className="about-col-1">
                <img src="./1.png" />
              </div>
              <div className="about-col-2">
                <h1 className="sub-title">About Me</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquid natus sunt cumque et. Sequi, error architecto. Quos,
                  quasi natus itaque molestias alias omnis rem ab modi
                  blanditiis vel repudiandae magnam!
                </p>
                <div className="tab-titles">
                  <p className="tab-links active-link">skills</p>
                  <p className="tab-links">Experience</p>
                  <p className="tab-links">Education</p>
                </div>
                <div className="tab-contents active-content">
                  <ul>
                    <li>
                      <span>UI/UX</span>
                      <br />
                      Designing web app
                    </li>
                    <li>
                      <span>Full stack development</span>
                      <br />
                      Designing web app
                    </li>
                    <li>
                      <span>UI?UX</span>
                      <br />
                      Designing web app
                    </li>
                  </ul>
                </div>
                <div className="tab-contents">
                  <ul>
                    <li>
                      <span>UI/UX</span>
                      <br />
                      Designing web app
                    </li>
                    <li>
                      <span>Full stack development</span>
                      <br />
                      Designing web app
                    </li>
                    <li>
                      <span>UI?UX</span>
                      <br />
                      Designing web app
                    </li>
                  </ul>
                </div>
                <div className="tab-contents">
                  <ul>
                    <li>
                      <span>UI/UX</span>
                      <br />
                      Designing web app
                    </li>
                    <li>
                      <span>Full stack development</span>
                      <br />
                      Designing web app
                    </li>
                    <li>
                      <span>UI?UX</span>
                      <br />
                      Designing web app
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        {type !== "services" && (
          <div>
            {" "}
            <p>University of Moratuwa</p>
            <ul>
              <li>
                {" "}
                B.Sc. Engineering (Hons) in Computer Science & Engineering
                undergraduate
              </li>
              <li>&nbsp; &nbsp; &nbsp;&nbsp;GPA : 3.738</li>
              <li>
                &nbsp; &nbsp; &nbsp;&nbsp;Dean's List: Semester 1 | Semester 2 |
                Semester 6
              </li>
              <li>&nbsp; &nbsp; &nbsp;&nbsp;2020-present</li>
            </ul>
            <br />
            <p>St' Josephs Balika Maha vidyalaya- Kegalle</p>
            <ul>
              <li>
                &nbsp; &nbsp; &nbsp;&nbsp;GCE A/L: 3As in physical science
                stream ( 2018 August)
              </li>

              <li>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;z-score: 2.2452 </li>
              <li>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;District rank: 1</li>
              <br />
              <li>
                &nbsp; &nbsp; &nbsp;&nbsp;GCE O/L: 9 As ( 2015 December)
                <ul>
                  <li>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;2010-2018</li>
                </ul>
              </li>
            </ul>
          </div>
        )}
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
