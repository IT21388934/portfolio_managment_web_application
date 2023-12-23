import "./ProjectScreen.css";
import projectData from "../data/projectsData";

import { motion } from "framer-motion";
import ProjectCard from "../components/other/projectCard";
import Header from "../components/common/Header";

export default function AboutScreen() {
  return (
    <>
      <Header />
      <motion.div
        className="container"
        // initial={{ opacity: 0, x: -100 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // transition={{
        //   duration: 2,
        //   delay: 0.6,
        //   ease: [0, 0.71, 0.2, 1.01],
        // }}
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
          {/* <hr className="line" /> */}
          <div className="title">Projects</div>
          {/* <hr className="line" /> */}
        </motion.div>

        <div className="projectContainer">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}{" "}
        </div>
      </motion.div>
    </>
  );
}
