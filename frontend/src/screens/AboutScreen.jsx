import "./aboutScreen.css";
import aboutMeImage from "../assets/images/mainImg.png";
import { motion } from "framer-motion";
import { VscTriangleRight } from "react-icons/vsc";
import skillDta from "../data/skillDta";

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
            👋 Hello! I am Rumesh Siriwardhana, a versatile web and mobile app
            developer, graphic designer, and aspiring software engineer.
            Currently pursuing a degree in software engineering, I blend
            technical expertise with design skills to craft innovative and
            user-friendly digital experiences.
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
            🚀 Passionate about creating impactful solutions, I thrive on
            challenges and value collaboration, creativity, and attention to
            detail. When not coding or designing, I explore new technologies,
            read, and work on personal projects.
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
            💻 Experienced in web development, mobile app development and UI/UX
            design, I enjoy bringing ideas to life and solving complex problems
            using modern technologies. A lifelong learner, I stay updated with
            the latest trends and industry best practices to deliver
            high-quality results that exceed expectations.
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
            Here languages and technologies I have been working with :
            <div className="skillsContainer">
              {/* {skillDta.map((skill) => (
              <div className="skill">
                <VscTriangleRight className="triangle" />
                <div className="skillName">{skill.name}</div>
              </div>
            ))} */}

              {skillDta.map((skill) => (
                <div className="skill" key={skill.id}>
                  <VscTriangleRight className="triangle" />
                  <div className="skillName">{skill.name}</div>
                </div>
              ))}
            </div>
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
