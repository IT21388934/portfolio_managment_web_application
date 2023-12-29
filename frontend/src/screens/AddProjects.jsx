import "./addProject.css";
import ImageUploader from "../components/imageUploader/ImageUploader";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function AddProjects() {
  return (
    <div className="bgImage">
      <div className="addProjectContainer">
        <motion.div
          className="projectFormContainer"
          initial={{ opacity: 0, rotateY: -100 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <form>
            <div className="formHeader">
              <div className="formTitle">Add Project</div>
              <motion.div
                className="closeBtn"
                whileHover={{ scale: 1.2 }}
                transform={{ duration: 1 }}
              >
                <Link to={"/profile"} className="closeIcon">
                  <IoCloseOutline />
                </Link>
              </motion.div>
            </div>

            <div className="formGroup">
              <label htmlFor="projectImage">Project Image</label>

              <ImageUploader />
            </div>
            <div className="formGroup">
              <label htmlFor="projectName">Project Name</label>
              <input
                type="text"
                id="projectName"
                placeholder="Enter Project Name"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="projectDescription">Project Description</label>
              <textarea
                type="text"
                id="projectDescription"
                placeholder="Enter Project Description"
              />
            </div>
            <div className="linksContainer">
              <div className="formGroup">
                <label htmlFor="githubLink">Github Link</label>
                <input
                  type="text"
                  id="githubLink"
                  placeholder="Enter Project Link"
                />
              </div>
              <div className="formGroup">
                <label htmlFor="liveLink">Live Link</label>
                <input
                  type="text"
                  id="liveLink"
                  placeholder="Enter Project Link"
                />
              </div>
            </div>
            {/* <div className="formGroup">
            <label htmlFor="projectLink">Project Link</label>
            <input
              type="text"
              id="projectLink"
              placeholder="Enter Project Link"
            />
          </div> */}

            <div className="formGroup">
              <div className="formBtn">Add Product</div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default AddProjects;
