const express = require("express");
const router = express.Router();

const messageCtl = require("../controllers/messageCtr");

// POST /messages
router.post("/add", messageCtl.addMessage);
router.get("/all", messageCtl.getAllMessages);
router.get(":id", messageCtl.getSingleMessage);
router.delete("/:id", messageCtl.deleteMessage);
router.put("/changeStatus/:id", messageCtl.updateStatus);

module.exports = router;
