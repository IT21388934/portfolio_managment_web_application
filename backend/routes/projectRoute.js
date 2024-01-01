const express = require("express");
const router = express.Router();

const projectCtr = require("../controllers/projectCtr");

router.post("/add", projectCtr.addProject);
router.get("/getall", projectCtr.getAllProjects);
router.delete("/delete/:id", projectCtr.deleteProject);

module.exports = router;
