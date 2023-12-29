import { useState } from "react";
import Links from "../Links/Links";
import ToggleBtn from "../toggleBtn/toggleBtn";
import "./AdminSideBar.css";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

function AdminSideBar() {
  const variants = {
    open: {
      clipPath: "circle(1000px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: "circle(25px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <>
      <motion.div
        className="sidebarContainer"
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div className="bg" variants={variants}>
          <Links />
        </motion.div>
        <ToggleBtn setIsOpen={setIsOpen} />
      </motion.div>
    </>
  );
}

AdminSideBar.propTypes = {
  setTab: PropTypes.func.isRequired,
};

export default AdminSideBar;
