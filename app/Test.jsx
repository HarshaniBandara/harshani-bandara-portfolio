"use client";
import { motion } from "framer-motion";

const Test = () => {
  const varients = {
    visible:(i)=>( {
      opacity: 1,
      x: 100,
    //   transition: { type: "spring", stiffness: 200, damping: 100 },
    transition:{delay:i*0.3}
    }),
    hidden: { opacity: 0 },
  };
  const items = ["item1", "item2", "item3", "item4"];
  return (
    <div className="cource">
      {/* <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, x: "200px", y: "200px" }}
        transition={{ duration: 2, delay: 2 }}
        whileHover={{ opacity: 1, scale: 2 }}
        // whileTap={{ opacity: 1, scale: 1 }}
        whileInView={{ opacity: 1, scale: 2 }}
      ></motion.div> */}
      <motion.ul initial="hidden" animate="visible" variants={varients}>
        {items.map((item,i) => (
          <motion.li variants={varients} key={item} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
