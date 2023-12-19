import Proptype from "prop-types";

export default function SkillCard({ skill }) {
  return (
    <div className="skillCard">
      <div className="skillCard__icon">
        <img src={skill.img} alt="icon" />
      </div>
      <div className="skillCard__title">{skill.name}</div>
    </div>
  );
}

SkillCard.propTypes = {
  skill: Proptype.any.isRequired, // Adjust the PropTypes according to the actual type
};
