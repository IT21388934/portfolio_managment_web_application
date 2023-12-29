import { FaCirclePlus } from "react-icons/fa6";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function TabHeader({ title, isAddButton, link, btnName }) {
  return (
    <motion.div
      className="tabHeaderContainer"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        delay: 1,
        ease: [0.5, 0.71, 1, 1.01],
      }}
    >
      <div className="tabHeader">
        <div className="tabTitle">{title}</div>
      </div>
      {isAddButton && (
        <motion.div
          className="addBtn"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <FaCirclePlus className="plusIcon" />
          <motion.div className="addProjectTxt">
            <Link className="alink2" to={`./admin/${link}`}>
              {btnName}
            </Link>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

TabHeader.propTypes = {
  title: PropTypes.string.isRequired,
  isAddButton: PropTypes.bool.isRequired,
  link: PropTypes.string,
  btnName: PropTypes.string,
};

export default TabHeader;
