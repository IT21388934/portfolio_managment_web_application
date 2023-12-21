import "./aboutScreen.css";
// import aboutMeImage from "../assets/images/mainImg.png";
import { motion } from "framer-motion";
// import { VscTriangleRight } from "react-icons/vsc";
// import skillDta from "../data/skillDta";

export default function AboutScreen() {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 2,
        delay: 0.6,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <motion.div
        className="titleSection"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 2,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <hr className="line" />
        <div className="title">About Me</div>
        <hr className="line" />
      </motion.div>

      <div className="aboutMeContent">
        <div className="aboutMeText">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            👋 Hello! I am Rumesh Siriwardhana, a versatile web and mobile app
            developer, graphic designer, and aspiring software engineer.
            Currently pursuing a degree in software engineering, I blend
            technical expertise with design skills to craft innovative and
            user-friendly digital experiences.Passionate about creating
            impactful solutions, I thrive on challenges and value collaboration,
            creativity, and attention to detail. When not coding or designing, I
            explore new technologies, read, and work on personal projects.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
