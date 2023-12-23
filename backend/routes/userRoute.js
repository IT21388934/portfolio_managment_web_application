const express = require("express");
const router = express.Router();

const userCtl = require("../controllers/userCtl");
// POST /users
router.post("/add", userCtl.addUser);
router.post("/register", userCtl.register);
router.post("/login", userCtl.login);
router.get("/all", userCtl.getAllUsers);

module.exports = router;
