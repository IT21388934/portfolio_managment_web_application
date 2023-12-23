import skillDta from "../../data/skillDta";
import Header from "../common/Header";

import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <>
      <Header />
      <div className="container">
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
          <div className="title">Skills</div>
          {/* <hr className="line" /> */}
        </motion.div>
        <br />
        <div className="skillsContainer">
          {skillDta.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </>
  );
}
