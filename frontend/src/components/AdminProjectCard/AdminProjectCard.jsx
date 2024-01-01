// import { useState } from "react";
import propTypes from "prop-types";
import "./AdminProjectCard.css";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

function AdminProjectCard({ project, setDeleteModalOpen, setDeleteProjectId }) {
  const data = project;

  const handleEditClick = () => {
    console.log("Edit Clicked");
    // Add your edit logic here
  };

  const handleDeleteClick = (data) => {
    setDeleteModalOpen(true);
    setDeleteProjectId(data._id);
    console.log(data._id);
    console.log("Delete Clicked");
  };

  // const handleConfirmDelete = () => {
  //   console.log("Confirmed Delete");
  //   // Add your delete logic here
  //   setDeleteModalOpen(false);
  // };

  // const handleCancelDelete = () => {
  //   setDeleteModalOpen(false);
  // };

  return (
    <motion.div
      className="adminProjectCardContainer"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0.5, 0.71, 1, 1.01],
      }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="editDeleteIcons">
        <motion.div
          className="editIconContainer"
          whileHover={{ scale: 1.1 }}
          onClick={handleEditClick}
        >
          <MdEdit className="editIcon" />
        </motion.div>
        <motion.div
          className="deleteIconContainer"
          whileHover={{ scale: 1.1 }}
          onClick={() => handleDeleteClick(data)}
        >
          <FaTrash className="deleteIcon" />
        </motion.div>
      </div>
      <div className="imgContainer">
        <img
          src={`${data.image}`}
          alt={data.title}
          className="adminProjectCardImg"
        />
      </div>
      <div className="adminProjectCardInfo">
        <div className="adminProjectCardTitle">{data.title}</div>
        <div className="adminProjectCardDesc">{data.description}</div>
      </div>

      {/* Delete Confirmation Modal
      {isDeleteModalOpen && (
        <div className="deleteModal">
          <p>Are you sure you want to delete?</p>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={handleCancelDelete}>No</button>
        </div>
      )} */}
    </motion.div>
  );
}

AdminProjectCard.propTypes = {
  project: propTypes.any.isRequired,
  setDeleteModalOpen: propTypes.func.isRequired,
  setDeleteProjectId: propTypes.func.isRequired,
};

export default AdminProjectCard;
