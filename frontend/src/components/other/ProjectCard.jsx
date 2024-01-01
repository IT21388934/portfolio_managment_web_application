import Proptype from "prop-types";
import "./projectCard.css";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <>
      <div className="projectCard">
        <motion.div
          className="projectCardInfo"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="projectCardTitle">{project.title}</div>
          <div className="projectCardDesc">{project.description}</div>
          <div className="btnContainer2">
            <div className="btn">
              <a
                // className="link"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
            <div className="btn">
              <a
                // className="link"
                {...(project.liveLink === ""
                  ? null
                  : "href={project.liveLink}")}
                // href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="projectCardImg"
          initial={{ opacity: 0, x: -600, y: 100 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            duration: 2,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img src={project.image} alt={project.title} />
        </motion.div>
      </div>
    </>
  );
}

ProjectCard.propTypes = {
  project: Proptype.any.isRequired, // Adjust the PropTypes according to the actual type
};
