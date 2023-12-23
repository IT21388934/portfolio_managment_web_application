// import React from "react";
import "./Header.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <nav>
        <motion.h3
          className="whiteText"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          Rumesh Siriwardhana .
        </motion.h3>
        <div className="navigations">
          <i className="fa-solid fa-bars"></i>
          <ul className="normal">
            <motion.li
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
                <Link className="loginText" to="/login">
                  Login
                </Link>
              </div>
            </motion.li>
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
