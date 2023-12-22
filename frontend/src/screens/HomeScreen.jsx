// import React from "react";
import "./HomeScreen.css";
import "../globle/styles.css";
import { TypeAnimation } from "react-type-animation";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialFlickr } from "react-icons/ti";
import { useState } from "react";
import { motion } from "framer-motion";

import AboutScreen from "./AboutScreen";
import Skills from "../components/other/skills";
import ProjectScreen from "./ProjectScreen";
// import { useState } from "react";
export default function HomeScreen() {
  const [isGithubHover, setIsGithubHover] = useState(false);
  const [isLinkedinHover, setIsLinkedinHover] = useState(false);
  const [isFacebookHover, setIsFacebookHover] = useState(false);
  const [isFlickrHover, setIsFlickrHover] = useState(false);

  return (
    <>
      {/* <div className="container"> */}
      <div className="container">
        <div className="section">
          <div className="info">
            <motion.div
              className="smallText"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.6,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Hi! my name is
            </motion.div>
            <motion.div
              className="name"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.8,
                ease: [0.5, 0.71, 1, 1.01],
              }}
            >
              Rumesh Siriwardhana
            </motion.div>
            <motion.div
              className="staticText"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: [0.5, 0.71, 1, 1.01],
              }}
            >
              I am a<span> </span>
              <span className="animatedText">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    " Software Engineer",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    " Web Developer",
                    1000,
                    " Mobile Developer",
                    1000,
                    " Graphic Designer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={55}
                  style={{ fontSize: "55px", display: "inline-block" }}
                  repeat={Infinity}
                />
              </span>
            </motion.div>
            <motion.div
              className="description"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 1.2,
                ease: [0.5, 0.71, 1, 1.01],
              }}
            >
              Currently, I am pursuing a degree in software engineering. With a
              passion for creating innovative and user-friendly digital
              experiences, I strive to blend my technical skills and design
              expertise to deliver impactful solutions.
            </motion.div>
            <div className="btnContainer">
              <motion.div
                className="btn"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 1.4,
                  ease: [0.5, 0.71, 1, 1.01],
                }}
              >
                Contact Me
              </motion.div>
              <motion.a
                rel="noreferrer"
                href="https://drive.google.com/file/d/1eJsqWPsNoLdNmuNXgtRbErONW27M5exH/view?usp=sharing"
                className="btn"
                target="_blank"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 1.6,
                  ease: [0.5, 0.71, 1, 1.01],
                }}
              >
                Resume
              </motion.a>
            </div>
          </div>
          <div className="socialMedias">
            <motion.div
              className="socialMedia"
              onMouseEnter={() => setIsGithubHover(true)}
              onMouseLeave={() => setIsGithubHover(false)}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: [0.5, 0.71, 1, 1.01],
              }}
            >
              <FiGithub className="hoveredIcon" />
              {isGithubHover && <div className="socialMediaName">Github</div>}
            </motion.div>
            <motion.div
              className="socialMedia"
              onMouseEnter={() => setIsLinkedinHover(true)}
              onMouseLeave={() => setIsLinkedinHover(false)}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1.2,
                ease: [0.5, 0.71, 1, 1.01],
              }}
            >
              <FaLinkedinIn className="hoveredIcon" />
              {isLinkedinHover && (
                <div className="socialMediaName">LinkedIn</div>
              )}
            </motion.div>
            <motion.div
              className="socialMedia"
              onMouseEnter={() => setIsFacebookHover(true)}
              onMouseLeave={() => setIsFacebookHover(false)}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1.4,
                ease: [0.5, 0.71, 1, 1.01],
              }}
            >
              <FaFacebookF className="hoveredIcon" />
              {isFacebookHover && (
                <div className="socialMediaName">Facebook</div>
              )}
            </motion.div>
            <motion.div
              className="socialMedia"
              onMouseEnter={() => setIsFlickrHover(true)}
              onMouseLeave={() => setIsFlickrHover(false)}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1.6,
                ease: [0.5, 0.71, 1, 1.01],
              }}
            >
              <TiSocialFlickr className="hoveredIcon" />
              {isFlickrHover && <div className="socialMediaName">Flickr</div>}
            </motion.div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <AboutScreen />
      <Skills />
      <ProjectScreen />
    </>
  );
}
