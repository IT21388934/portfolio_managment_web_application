const Profiles = require("../models/profileModel");
const { verifyToken, verifyAndAuth } = require("../routes/verify");

exports.addProfile = async (req, res) => {
  try {
    verifyAndAuth(req, res, async () => {
      const {
        firstName,
        lastName,
        description,
        email,
        phone,
        address,
        resumeLink,
        linkedinLink,
        githubLink,
        profileImg,
        cloudinaryId,
        faceBookLink,
        flickerLink,
      } = req.body;
      try {
        const profile = new Profiles({
          firstName,
          lastName,
          description,
          email,
          phone,
          address,
          resumeLink,
          linkedinLink,
          githubLink,
          profileImg,
          cloudinaryId,
          faceBookLink,
          flickerLink,
        });

        const savedProfile = await profile.save();

        res.status(201).json({
          success: true,
          message: "Profile created successfully",
          profile: savedProfile,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to create profile",
          error: error.message,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create profile",
      error: error.message,
    });
  }
};
