const Project = require("../models/projectModel");
const { verifyToken, verifyAndAuth } = require("../routes/verify");

exports.addProject = async (req, res) => {
  try {
    verifyAndAuth(req, res, async () => {
      const {
        title,
        description,
        image,
        githubLink,
        liveLink,
        category,
        cloudinaryId,
      } = req.body;
      try {
        const project = new Project({
          title,
          description,
          image,
          githubLink,
          liveLink,
          category,
          cloudinaryId,
        });

        const savedProject = await project.save();

        res.status(201).json({
          success: true,
          message: "Project created successfully",
          project: savedProject,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to create project",
          error: error.message,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create project",
      error: error.message,
    });
  }
};

//get all project
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    if (!projects) {
      return res.status(404).json({
        success: false,
        message: "No project found",
      });
    }
    res.status(200).json({
      success: true,
      message: "All projects",
      projects: projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get projects",
      error: error.message,
    });
  }
};

//get a project
exports.getSingleProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "No project found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Project found",
      project: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get project",
      error: error.message,
    });
  }
};

//delete a project
exports.deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({
        success: false,
        message: "No project found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
      deletedProject: deletedProject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete project",
      error: error.message,
    });
  }
};
