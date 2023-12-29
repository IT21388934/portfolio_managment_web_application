import { useState } from "react";
import "./imgeUploader.css";
import { MdDeleteOutline } from "react-icons/md";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const imageFile = e.dataTransfer.files[0];
    handleImageSelection(imageFile);
  };

  const handleImageSelection = (imageFile) => {
    if (imageFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(imageFile);
    }
  };

  const handleFileInputChange = (e) => {
    const imageFile = e.target.files[0];
    handleImageSelection(imageFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="imageUploader">
      <div
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {selectedImage ? (
          <div className="selectedImageContainer">
            <img src={selectedImage} className="selectedImage" alt="Selected" />
            <div className="trash-can-overlay">
              <span
                className="trash-can-icon"
                onClick={() => setSelectedImage(null)}
              >
                <MdDeleteOutline />
              </span>
            </div>
          </div>
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
          onChange={handleFileInputChange}
        />
      </label>
    </div>
  );
};

export default ImageUploader;
