// import React from "react";
import "./Header.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/favicon.ico";
// import AnimatePresence from "framer-motion";

export default function Header() {
  const loginData = localStorage.getItem("userState");

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const [isLogOutPopupOpen, setIsLogOutPopupOpen] = useState(false);

  const handleToggleLogOutPopup = () => {
    localStorage.removeItem("userState");
    window.location.reload();
  };

  return (
    <div className="header">
      <nav>
        <motion.div
          className="homeIcon"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Link className="link" to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </motion.div>
        <div className="navigations">
          <i className="fa-solid fa-bars"></i>
          <ul className="normal">
            <motion.li
              className="normalli"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Link className="link" to="/">
                Home
              </Link>
            </motion.li>
            <motion.li
              className="normalli"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Link className="link" to="/skills">
                Skills
              </Link>
            </motion.li>

            <motion.li
              className="normalli"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Link className="link" to="/projects">
                Projects
              </Link>
            </motion.li>
            <motion.li
              className="normalli"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1.4,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Link className="link" to="/contact">
                Contact
              </Link>
            </motion.li>

            {/* {loginData && (
              <motion.li>
                <div className="btn">
                  <Link className="profile" to="/profile">
                    Profile
                  </Link>
                </div>
              </motion.li>
            )} */}
            {loginData ? (
              <motion.li
                className="profile"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 1.6,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div className="btn" onClick={handleToggleDropdown}>
                  {/* <Link className="loginText" to="/profile"> */}
                  Profile
                  {/* </Link> */}
                </div>
                {isOpen && (
                  // <AnimatePresence>
                  <motion.div
                    className="dropDown"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      delay: 0.8,
                    }}
                  >
                    <ul className="dropDownUl ">
                      <li className="dropDownLi">
                        <Link className="dropDownLink" to="/profile">
                          Profile
                        </Link>
                      </li>
                      {/* <hr className="dropHr" /> */}
                      <li
                        className="dropDownLi"
                        onClick={handleToggleLogOutPopup}
                      >
                        <div className="dropDownLink">Logout</div>
                      </li>
                    </ul>
                  </motion.div>
                  // </AnimatePresence>
                )}
              </motion.li>
            ) : (
              <motion.li
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 1.6,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div className="btn">
                  <Link className="dropDownLink" to="/login">
                    Login
                  </Link>
                </div>
              </motion.li>
            )}
          </ul>
        </div>
      </nav>
      {/* <ul className="dropdown">
        <li>
          <a href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#" onclick="smoothScrollTo('about', event)">
            About
          </a>
        </li>

        <li>
          <a href="#" onclick="smoothScrollTo('skills', event)">
            Skills
          </a>
        </li>
        <li>
          <a href="#" onclick="smoothScrollTo ('contact', event)">
            Contact
          </a>
        </li>
      </ul> */}
    </div>
  );
}
