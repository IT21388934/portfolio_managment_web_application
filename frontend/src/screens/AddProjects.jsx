import "./addProject.css";
import ImageUploader from "../components/imageUploader/ImageUploader";
import { IoCloseOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { userRequest } from "../../requestMethods";
import { projectValidation } from "../../validations/addProjectValidation/projectValidation";

function AddProjects() {
  // const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const iconClass = isOpen ? "dropdown-icon rotate-icon" : "dropdown-icon";

  const options = ["Web Development", "Mobile App", "Graphic Design", "UI/UX"];
  const [imageUrl, setImageUrl] = useState(null);
  const [cloudinaryId, setClodinaryId] = useState(null); // [1
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [validationError, setValidationError] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    console.log("handle add product");

    const projectData = {
      title: projectName,
      description: projectDescription,
      image: imageUrl,
      category: selectedOption,
      githubLink: githubLink,
      liveLink: liveLink,
      cloudinaryId: cloudinaryId,
    };

    const validationResults = projectValidation(projectData);
    console.log("validationResults", validationResults);
    if (validationResults) {
      setValidationError(validationResults);
      errorMessage("Please fill all the fields");
    } else {
      try {
        const response = await userRequest.post("/projects/add", projectData);
        console.log(response.data); // Access data here
        setProjectName("");
        setProjectDescription("");
        setGithubLink("");
        setLiveLink("");
        setSelectedOption("");
        setImageUrl("");
        setClodinaryId("");
        successMessage(response.data.message);
        navigate("/profile");
      } catch (error) {
        console.error(error);
        console.log(error.response.data); // Access error response here
        // alert(error.response.data.error);
        errorMessage(error.response.data.message);
      }
    }
  };

  //Toast messages

  const successMessage = (message) => {
    toast.success(message, {
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const errorMessage = (message) => {
    toast.error(message, {
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      progress: undefined,
    });
  };

  return (
    <>
      {/* <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      /> */}
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
                <div className="labelAndError">
                  <label htmlFor="projectImage">Project Image</label>
                  {validationError.image && (
                    <div className="validationError">
                      {validationError.image}
                    </div>
                  )}
                </div>

                <ImageUploader
                  setImageUrl={setImageUrl}
                  setClodinaryId={setClodinaryId}
                />
              </div>
              <div className="formGroup">
                <div className="labelAndError">
                  <label htmlFor="projectName">Project Name</label>
                  {validationError.title && (
                    <div className="validationError">
                      {validationError.title}
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  id="projectName"
                  value={projectName}
                  placeholder="Enter Project Name"
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <div className="formGroup">
                <div className="labelAndError">
                  <label htmlFor="category">Category</label>
                  {validationError.category && (
                    <div className="validationError">
                      {validationError.category}
                    </div>
                  )}
                </div>

                <div className="custom-dropdown-container">
                  <div className="inputContainer">
                    <div className="selected-option" onClick={toggleDropdown}>
                      {selectedOption || "Select an option"}
                    </div>
                    <div
                      className="dropdown-icon-container"
                      onClick={toggleDropdown}
                    >
                      <IoIosArrowDropdown className={iconClass} />
                    </div>
                  </div>

                  {isOpen && (
                    <ul className="dropdown-options">
                      {options.map((option, index) => (
                        <li
                          className="dropdown-options-li "
                          key={index}
                          onClick={() => handleOptionClick(option)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="formGroup">
                <div className="labelAndError">
                  <label htmlFor="projectDescription">
                    Project Description
                  </label>
                  {validationError.description && (
                    <div className="validationError">
                      {validationError.description}
                    </div>
                  )}
                </div>

                <textarea
                  type="text"
                  id="projectDescription"
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  placeholder="Enter Project Description"
                />
              </div>
              <div className="linksContainer">
                <div className="formGroup">
                  <label htmlFor="githubLink">Github Link</label>
                  <input
                    type="text"
                    id="githubLink"
                    value={githubLink}
                    onChange={(e) => setGithubLink(e.target.value)}
                    placeholder="Enter Project Link"
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="liveLink">Live Link</label>
                  <input
                    type="text"
                    id="liveLink"
                    value={liveLink}
                    onChange={(e) => setLiveLink(e.target.value)}
                    placeholder="Enter Project Link"
                  />
                </div>
              </div>

              <div className="formGroup">
                <div className="formBtn" onClick={handleAddProduct}>
                  Add Product
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default AddProjects;
