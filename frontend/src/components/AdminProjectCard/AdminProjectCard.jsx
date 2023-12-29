import propTypes from "prop-types";
import "./AdminProjectCard.css";
import { motion } from "framer-motion";

function AdminProjectCard(project) {
  const data = project.project;

  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    // <div>
    //   <div>{data.name}</div>
    //   <div>{data.description}</div>
    //   <div>{data.img}</div>
    // </div>

    <motion.div
      className="adminProjectCardContainer"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        delay: 1,
        ease: [0.5, 0.71, 1, 1.01],
      }}
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
    >
      <div className="imgContainer">
        <img src={data.img} alt={data.name} className="adminProjectCardImg" />
      </div>
      <div className="adminProjectCardInfo">
        <div className="adminProjectCardTitle">{data.name}</div>
        <div className="adminProjectCardDesc">{data.description}</div>
      </div>
    </motion.div>
  );
}

export default AdminProjectCard;

AdminProjectCard.propTypes = {
  project: propTypes.any.isRequired, // Adjust the PropTypes according to the actual type
};
