import { useEffect, useState, useCallback } from "react";
import "./imgeUploader.css";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import PropTypes from "prop-types";

const ImageUploader = ({ setImageUrl, setClodinaryId }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imgPublicId, setImgPublicId] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    setSelectedImage(e.dataTransfer.files[0]);
  };

  const handleSelectFile = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Wrap handleUpload in useCallback
  const handleUpload = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = new FormData();
      data.append("image", selectedImage);
      const res = await axios.post(
        "http://localhost:3000/api/image/upload",
        data
      );
      const imageUrl = res.data.url;
      setUrl(imageUrl);
      setImgPublicId(res.data.public_id);
      console.log(imageUrl);
      console.log(res.data);
      setImageUrl(imageUrl);
      setClodinaryId(res.data.public_id);
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [selectedImage]);

  useEffect(() => {
    if (selectedImage) {
      handleUpload();
    }
  }, [selectedImage, handleUpload]);

  /**
   * handle delete image from cloudinary
   */
  const handleRemoveImg = () => {
    return async () => {
      try {
        setIsLoading(true);
        const res = await axios.post("http://localhost:3000/api/image/remove", {
          public_id: imgPublicId,
        });
        console.log(res.data);
        setUrl(null);
        setSelectedImage(null);
        setImgPublicId(null);
        console.log("Image removed");
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    };
  };

  return (
    <div className="imageUploader">
      <div
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {url ? (
          <div className="selectedImageContainer">
            <img src={`${url}`} className="selectedImage" alt="Selected" />
            <div className="trash-can-overlay">
              <span className="trash-can-icon" onClick={handleRemoveImg()}>
                <MdDeleteOutline />
              </span>
            </div>
          </div>
        ) : isLoading ? (
          <p className="insideText">UPLOADING .....</p>
        ) : (
          <p className="insideText">Drag & Drop an image or choose from file</p>
        )}
      </div>
      <label htmlFor="fileInput" className="customFileInput">
        Upload from File
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleSelectFile}
        />
      </label>
      {/* <button className="uploadButton" onClick={handleUpload}>
        Upload
      </button> */}
    </div>
  );
};

export default ImageUploader;

ImageUploader.propTypes = {
  setImageUrl: PropTypes.func.isRequired,
  setClodinaryId: PropTypes.func.isRequired,
};
