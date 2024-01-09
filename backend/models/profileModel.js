const mongoose = require("mongoose");

const profilesSchema = new mongoose.Schema({
  firstName: {
    type: String,
    // required: true,
  },
  lastName: {
    type: String,
  },

  description: {
    type: String,
    // required: true,
  },

  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  resumeLink: {
    type: String,
  },
  linkedinLink: {
    type: String,
  },
  githubLink: {
    type: String,
  },
  profileImg: {
    type: String,
  },
  cloudinaryId: {
    type: String,
  },
  faceBookLink: {
    type: String,
  },
  flickerLink: {
    type: String,
  },
});

const Profiles = mongoose.model("Profiles", profilesSchema);
module.exports = Profiles;
