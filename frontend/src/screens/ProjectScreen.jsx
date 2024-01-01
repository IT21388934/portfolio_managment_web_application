import "./ProjectScreen.css";

import { motion } from "framer-motion";
import ProjectCard from "../components/other/projectCard";
import Header from "../components/common/Header";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AboutScreen() {
  const [projectsData, setProjectsData] = useState([]);

  const getProjects = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/projects/getall"
      );
      // console.log(response.data.projects);
      // setProjectsData(response.data.projects);
      console.log(response);
      const { projects, success, message } = response.data;
      console.log(projects, success, message);
      setProjectsData(projects);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    console.log("Before getProjects");
    getProjects();
    console.log("After getProjects");
  }, []);
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
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}{" "}
        </div>
      </motion.div>
    </>
  );
}
