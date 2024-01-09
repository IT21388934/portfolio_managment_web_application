const express = require("express");
const router = express.Router();

const skillCtr = require("../controllers/skillCtr");

router.post("/add", skillCtr.addSkill);
router.get("/getall", skillCtr.getAllSkills);
router.delete("/delete/:id", skillCtr.deleteSkill);
router.put("/update/:id", skillCtr.updateSkill);

module.exports = router;
