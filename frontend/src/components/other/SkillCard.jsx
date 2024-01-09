import { useState } from "react";
import Proptype from "prop-types";
import "./SkillCard.css";
import { motion } from "framer-motion";
export default function SkillCard({ skill }) {
  const [isSkillHover, setIsSkillHover] = useState(false);
  return (
    <>
      <motion.div
        className="skillCard"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 2,
          delay: 1.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        onMouseEnter={() => setIsSkillHover(true)}
        onMouseLeave={() => setIsSkillHover(false)}
      >
        <div className="skillCard__icon">
          <img src={skill.image} alt="icon" className="skillIcon" />
        </div>
        <div className="skillCard__title">{skill.name}</div>
        {isSkillHover && (
          <motion.div
            className="skillCard__overlay"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.85, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0,
              ease: [0.5, 0.71, 1, 1.01],
            }}
          >
            <div className="skillCard__pres">
              {skill.percentage ? skill.percentage : "N/A"}
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}

SkillCard.propTypes = {
  skill: Proptype.any.isRequired, // Adjust the PropTypes according to the actual type
};
