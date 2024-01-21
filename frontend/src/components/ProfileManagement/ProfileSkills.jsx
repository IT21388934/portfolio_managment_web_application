import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { motion } from "framer-motion";
import PropType from "prop-types";

function ProfileSkills({ setEditPopUp, skill, setEditData }) {
  const [isSkillHover, setIsSkillHover] = useState(false);
  const isSkillEditable = true;

  return (
    <div>
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
          {isSkillEditable && (
            <div
              className="editContainer"
              //   onClick={handleEdit(skill)}
              onClick={() => {
                setEditData(skill);
                setEditPopUp(true);
              }}
            >
              <MdEdit className="skillEditIcon" />
            </div>
          )}

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
                {skill.percentage ? `${skill.percentage}%` : "N/A"}
              </div>
            </motion.div>
          )}
        </motion.div>
      </>
    </div>
  );
}

export default ProfileSkills;

ProfileSkills.propTypes = {
  setEditPopUp: PropType.func.isRequired,
  skill: PropType.any.isRequired,
  setEditData: PropType.func.isRequired,
};
