import skillDta from "../../data/skillDta";
import SkillCard from "./SkillCard";

export default function Skills() {
  return skillDta.map((skill) => <SkillCard key={skill.id} skill={skill} />);
}
