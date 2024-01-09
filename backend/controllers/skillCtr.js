const Skill = require("../models/skillModel");
const { verifyToken, verifyAndAuth } = require("../routes/verify");

exports.addSkill = async (req, res) => {
  try {
    verifyAndAuth(req, res, async () => {
      const { name, percentage, image, cloudinaryId } = req.body;
      try {
        const skill = new Skill({
          name,
          percentage,
          image,
          cloudinaryId,
        });

        const savedSkill = await skill.save();

        res.status(201).json({
          success: true,
          message: "Skill created successfully",
          skill: savedSkill,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to create skill",
          error: error.message,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Your Not Authorized, Please Login",
      error: error.message,
    });
  }
};

exports.getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    if (!skills) {
      return res.status(404).json({
        success: false,
        message: "No skill found",
      });
    }
    res.status(200).json({
      success: true,
      message: "All skills",
      skills,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get skills",
      error: error.message,
    });
  }
};

exports.updateSkill = async (req, res) => {
  try {
    const { name, percentage, image, cloudinaryId } = req.body;

    const skill = await Skill.findById(req.params.id);

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "No skill found",
      });
    }

    skill.name = name;
    skill.percentage = percentage;
    skill.image = image;
    skill.cloudinaryId = cloudinaryId;

    const updatedSkill = await skill.save();

    res.status(200).json({
      success: true,
      message: "Skill updated successfully",
      skill: updatedSkill,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update skill",
      error: error.message,
    });
  }
};

exports.deleteSkill = async (req, res) => {
  try {
    verifyAndAuth(req, res, async () => {
      try {
        const skill = await Skill.findByIdAndDelete(req.params.id);
        if (!skill) {
          return res.status(404).json({
            success: false,
            message: "No skill found",
          });
        }
        res.status(200).json({
          success: true,
          message: "Skill deleted successfully",
          skill: skill,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to delete skill",
          error: error.message,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Your Not Authorized, Please Login",
      error: error.message,
    });
  }
};
