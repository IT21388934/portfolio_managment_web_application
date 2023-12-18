import "./aboutScreen.css";
import aboutMeImage from "../assets/images/mainImg.png";
import { motion } from "framer-motion";

export default function AboutScreen() {
  return (
    <div className="container">
      <motion.div
        className="titleSection"
        initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 1, scale: 1 }}
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
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Hello! I am Rumesh Siriwardhana, a web developer, graphic designer,
            UI/UX designer, and mobile app developer. Currently, I am pursuing a
            degree in software engineering. With a passion for creating
            innovative and user-friendly digital experiences, I strive to blend
            my technical skills and design expertise to deliver impactful
            solutions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            When I am not coding or designing, you can find me exploring new
            technologies, reading books, or honing my skills through personal
            projects. I value collaboration, creativity, and attention to
            detail, and I am always excited to take on new challenges and work
            on exciting projects.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Throughout my journey, I have gained valuable experience in web
            development, creating visually appealing designs, and developing
            intuitive user interfaces. I enjoy bringing ideas to life and
            solving complex problems using modern technologies and industry best
            practices.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2,
              delay: 1.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            As a lifelong learner, I am constantly expanding my knowledge and
            staying up-to-date with the latest trends and advancements in the
            field. I believe in continuous improvement and strive to deliver
            high-quality results that exceed client expectations.
          </motion.p>
        </div>
        <motion.div
          className="aboutMeImageContainer"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img className="aboutMeImage" src={aboutMeImage} alt="" />
        </motion.div>
      </div>
    </div>
  );
}
