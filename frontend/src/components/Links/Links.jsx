// import { useState } from "react";
import PropTypes from "prop-types";
import { changeTab } from "../../redux/adminTabRedux";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

const variants = {
  open: {
    staggerChildren: 0.05,
  },
  closed: {
    staggerChildren: 0.05,
    staggerDirection: -1,
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

function Links() {
  // const handleTab = (name) => {
  //   setTab(name);
  // };
  const dispatch = useDispatch();
  const handleTabChange = (name) => {
    dispatch(changeTab(name));
  };

  const links = [
    {
      name: "Projects",
      link: "/admin/projects",
    },
    {
      name: "Orders",
      link: "/admin/orders",
    },
    {
      name: "Users",
      link: "/admin/users",
    },
    {
      name: "Profile",
      link: "/admin/profile",
    },

    {
      name: "Messages",
      link: "/admin/messages",
    },
  ];

  return (
    <motion.div className="adminLinks" variants={variants}>
      {links.map((item) => (
        <motion.div
          className="alink"
          key={item.name}
          onClick={() => handleTabChange(item.name)}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {item.name}
        </motion.div>
      ))}
    </motion.div>
  );
}

Links.propTypes = {
  setTab: PropTypes.func.isRequired,
};
export default Links;
