const express = require("express");
const Multer = require("multer");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return res;
}

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      throw new Error("No file uploaded");
    }

    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(dataURI);
    res.json(cldRes);
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).send({
      message: error.message || "Internal server error",
    });
  }
};

const removeImg = async (req, res) => {
  try {
    const { public_id } = req.body;
    if (!public_id) {
      throw new Error("No file uploaded");
    }
    const cldRes = await cloudinary.uploader.destroy(public_id);
    res.json(cldRes);
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).send({
      message: error.message || "Internal server error",
    });
  }
};
exports.uploadImage = uploadImage;
exports.removeImg = removeImg;
