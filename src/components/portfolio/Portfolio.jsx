import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Math word problem generation platform",
    img: "./1.png",
    link:"https://github.com/MathWizards-Final-Year-Project/MathWizards-Math-word-Problem-Generation.git",
    desc: `Automatically generating MathWord problems is challenging because the generated text should satisfy Mathematical constraints and correct units. Cutting-edge technologies such as RLHF, which was used to train ChatGPT are used in the project. A tutor or a student can create a more personalized question set that satisfies all the math constraints using this platform. This will extend to the low resources languages also.`,
  },
  {
    id: 2,
    title: "Constraint Based Roster Scheduler",
    img: "./2.png",
    link:"https://github.com/Constraint-Based-Roster-Schedule",
    desc: `Mobile optimised web application for generate constraint-based monthly roster scheduler for doctors in a medical ward of a hospital. When the admin defines the available number of duty cycles and the number of required doctors and other constraints, the roster schedule for the month will be generated from our system and doctors can define any leaves that they want to month.

    Technologies : React JS, Node JS, Bootstrap, CSS, MongoDB`,
  },
  {
    id: 3,
    title: "UMISF - Official Web Application",
    img: "./8.png",
    link:"https://github.com/UMiSF",
    desc: `The Official web application of UMISF (University of Moratuwa Intershuttlers Festival) which will be used for player registration, draws creation, umpiring, and displaying results

    Technologies: HTML, CSS, JS, ReactJS, NodeJS, MongoDB`,
  },
  {
    id: 4,
    title: "Airline reservation system",
    img: "./3.png",
    link:"https://github.com/ShihanVidulanka/Airline-Reservation-System.git",
    desc: `This is a web based airline reservation system for ‘B airways’ that is a subsidiary of Virgin airlines. This is a system for covering multiple destinations worldwide with adding new routes, destinations, and multiple flights covering those destinations.
    The purpose of the system being specified is to aid airline schedules, passenger reservations, and ticket
    records for B airways. The system mainly helps to maintain data about airplanes, flights, and passengers.`,
  },
  {
    id: 5,
    title: "Vehicle Collision Warning System",
    img: "./7.png",
    link:"https://github.com/HarshaniBandara/Programming-Challenge-2-Project.git",
    desc: `A python application that can take a real time video stream as the input and identify the obstacles to warn the driver by predicting collisions. 
    Process a video stream from a vehicle dash cam and track the movement of
    vehicles in the video stream.
    Predict the movement of the tracked vehicles for two seconds ahead.
    Users should be able to mark an area as a danger area.
    If a vehicle is predicted to enter the danger area in the next two seconds, a
    warning should be generated.
    Technologies : 
    Python, OpenCV, YOLO`,
  },
  {
    id: 6,
    title: "Child care management system ",
    img: "./5.png",
    link:"https://github.com/SahanDC/ChildCare.git",
    desc: `A web application to manage gathering childes and parents for their vaccination process and weight recordings in pandemic situation.
    Technologies : 
    HTML, Bootstrap, CSS, Bootstrap
    PHP, MySQL`,
  },
  {
    id: 7,
    title: "Student Management system",
    img: "./4.png",
    link:"https://github.com/cse-mosip",
    desc: `A web application for managing university student. The students can apply for various requests and lecturers can view, respond to the requests and reject requests made by the students/.
    Technologies : 
    HTML, Bootstrap, CSS
    PHP, MySQL`,
  },
  {
    id: 8,
    title: "Buddhika Photography Website",
    img: "./6.png",
    link:"https://github.com/BuddikaPhotography",
    desc: `A web application for photographer to show their photos and sell them. And also clients can contact the photographer throughh the site./.
    Technologies : 
    Next.js, 
    NOde.js, AWS`,
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
            <a href={item.link}>
              <button>Source code</button>
            </a>
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
