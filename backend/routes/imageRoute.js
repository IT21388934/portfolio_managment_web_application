const express = require("express");
const router = express.Router();
const { uploadImage, removeImg } = require("../imgeUpload");
const Multer = require("multer");

const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});

router.post("/upload", upload.single("image"), uploadImage);
router.post("/remove", removeImg);

module.exports = router;
