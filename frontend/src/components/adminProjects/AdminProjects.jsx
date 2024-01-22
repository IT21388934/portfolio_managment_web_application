import "./adminProject.css";
import TabHeader from "../admniDashCom/TabHeader";
// import projectsData from "../../data/projectsData";
import AdminProjectCard from "../AdminProjectCard/AdminProjectCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { successMessage, errorMessage } from "../../toastMessage/toastMessage";

function AdminProjects() {
  const [projectsData, setProjectsData] = useState([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteProjectId, setDeleteProjectId] = useState("");
  // const [imgPublicId, setImgPublicId] = useState(null);

  const [className, setClassName] = useState("adminProjectContainer");
  useEffect(() => {
    if (deleteModalOpen) {
      setClassName("adminProjectContainerBlur");
      console.log("Blur");
    } else {
      setClassName("adminProjectContainer");
    }
  }, [deleteModalOpen]);

  console.log(projectsData);

  const getProjects = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/projects/getall"
      );
      // console.log(response.data.projects);
      // setProjectsData(response.data.projects);
      console.log(response);
      const { projects, success, message } = response.data;
      console.log(projects, success, message);
      setProjectsData(projects);
    } catch (error) {
      console.error(error);
      errorMessage(error.message);
    }
  };

  useEffect(() => {
    console.log("Before getProjects");
    getProjects();
    console.log("After getProjects");
  }, []);

  /**
   * handle delete image from cloudinary
   */
  const handleRemoveImg = async (cloudinaryId) => {
    console.log("handleRemoveImg");
    console.log(cloudinaryId);
    if (cloudinaryId !== null) {
      console.log("Image to remove");
      try {
        // setIsLoading(true);

        const res = await axios.post("http://localhost:3000/api/image/remove", {
          public_id: cloudinaryId,
        });
        console.log(res.data);
        console.log("Image removed from cloudinary");
      } catch (error) {
        alert(error.message);
      }
    } else {
      console.log("No image to remove");
    }
  };

  //delete project
  const handleDeleteProject = async () => {
    try {
      if (deleteProjectId === "") {
        alert("Please select a project to delete");
        return;
      } else {
        const response = await axios.delete(
          "http://localhost:3000/api/projects/delete/" + deleteProjectId
        );
        console.log(response);
        const { deletedProject } = response.data;
        if (response.data.success) {
          setDeleteModalOpen(false);
          setDeleteProjectId("");
          console.log(deletedProject);
          // setImgPublicId(deletedProject.cloudinaryId);
          const cloudinaryId = deletedProject.cloudinaryId;
          handleRemoveImg(cloudinaryId);
          getProjects();
          successMessage(response.data.message);
        } else {
          // alert(response.data.message);
          errorMessage(response.data.message);
        }
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleCancelDelete = () => {
    setDeleteModalOpen(false);
    setDeleteProjectId("");
  };

  return (
    <>
      <div className={className}>
        <TabHeader
          title="My Projects"
          isAddButton={true}
          link={"addProject"}
          btnName={"Add Project"}
        />

        {/* {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}{" "} */}
        <div className="projectContainer">
          {projectsData.length === 0 ? (
            <div className="noProject">No Project Added</div>
          ) : (
            <>
              {projectsData.map((project) => (
                <AdminProjectCard
                  key={project._id}
                  project={project}
                  setDeleteModalOpen={setDeleteModalOpen}
                  setDeleteProjectId={setDeleteProjectId}
                />
              ))}
            </>
          )}
        </div>
      </div>
      {deleteModalOpen ? (
        <div className="conformationContainer">
          <div className="conformationBox">
            <div className="conformationBoxText">
              Are you sure you want to delete this project?
            </div>
            <div className="conformationBoxButtons">
              <div className="deleteButton" onClick={handleDeleteProject}>
                Delete
              </div>
              <div
                className="conformationButton"
                onClick={() => handleCancelDelete()}
              >
                Cancel
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default AdminProjects;
