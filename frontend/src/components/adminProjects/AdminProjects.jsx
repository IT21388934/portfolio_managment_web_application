import "./adminProject.css";
import TabHeader from "../admniDashCom/TabHeader";
import projectsData from "../../data/projectsData";
import AdminProjectCard from "../AdminProjectCard/AdminProjectCard";

function AdminProjects() {
  console.log(projectsData);

  return (
    <>
      <div className="adminProjectContainer">
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
          {projectsData.map((project) => (
            <AdminProjectCard key={project.id} project={project} />
          ))}{" "}
        </div>
      </div>
    </>
  );
}

export default AdminProjects;
