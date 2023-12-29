import { Link } from "react-router-dom";
import "./AdminHeader.css";
import { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import AdminSideBar from "../adminSideBar/AdminSideBar";
import { motion } from "framer-motion";

export default function AdminHeader() {
  const user = localStorage.getItem("userState");
  const userInfo = JSON.parse(user).currentUser.user;
  console.log(userInfo);

  const handleLogout = () => {
    localStorage.removeItem("userState");
    window.location.href = "/";
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <motion.div className="navbar">
        <AdminSideBar
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.5, 0.71, 1, 1.01],
          }}
        />
        <div className="adminWrapper">
          <motion.div
            className="DashboardTitle"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.5, 0.71, 1, 1.01],
            }}
          >
            Admin Dashboard
          </motion.div>
          <motion.div
            className="dashDropDown"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.5, 0.71, 1, 1.01],
            }}
          >
            <button
              className="dropbtn"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <MdAccountCircle />
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <Link className="adDropdownLinks" to="/">
                  Main Page
                </Link>
                <div className="adDropdownLinks" onClick={handleLogout}>
                  Logout
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
