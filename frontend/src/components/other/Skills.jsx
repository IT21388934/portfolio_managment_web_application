// import skillDta from "../../data/skillDta";
import Header from "../common/Header";
import { publicRequest } from "../../../requestMethods";

import SkillCard from "./SkillCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Skills() {
  const isSkillEditable = false;
  const [skillData, setSkillData] = useState([]);

  const getSkills = async () => {
    try {
      const response = await publicRequest.get("/skills/getall");
      // console.log(response);
      const { skills, success, message } = response.data;
      console.log(skills, success, message);
      setSkillData(skills);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSkills();
  }, []);
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
          {skillData.map((skill) => (
            <SkillCard
              key={skill._id}
              skill={skill}
              isSkillEditable={isSkillEditable}
            />
          ))}
        </div>
      </div>
    </>
  );
}
