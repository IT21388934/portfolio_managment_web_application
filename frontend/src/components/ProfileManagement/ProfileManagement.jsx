import { useCallback, useEffect, useState } from "react";
import "./profileMagement.css";
import TabHeader from "../admniDashCom/TabHeader";
import { MdPhotoCamera } from "react-icons/md";
import { userRequest, publicRequest } from "../../../requestMethods";
import { motion } from "framer-motion";
import { FaCirclePlus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
// import { isValidPercentage } from "../../../validations/addProjectValidation/addSkillValidation/addSkillValidation";

// import { motion } from "framer-motion";
import ProfileInfo from "./profileInfo";
import ProfileSkills from "./profileSkills";
import axios from "axios";

import { successMessage, errorMessage } from "../../toastMessage/toastMessage";

function ProfileManagement() {
  //set states
  const [tab, setTab] = useState("myInfo");
  const [editPopUp, setEditPopUp] = useState(false);
  const [editData, setEditData] = useState({});
  const [addSkillPopUp, setAddSkillPopUp] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [imgPublicId, setImgPublicId] = useState(null);

  const [skills, setSkills] = useState([]);

  const [newSkill, setNewSkill] = useState({
    name: "",
    img: "",
    percentage: "",
  });

  //GET SKILL DATA
  const getSkills = async () => {
    try {
      const res = await publicRequest.get("/skills/getAll");
      console.log("skills", res.data);
      setSkills(res.data.skills);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSkills();
  }, []);

  const handleSaveEdits = () => {
    console.log("save edits");
    console.log({ editData: editData });
    skills.map((skills) => {
      if (skills.id === editData.id) {
        skills.name = editData.name;
        skills.percentage = editData.percentage;
      }

      return skills;
    });
    setEditData({});
    setEditPopUp(false);
  };
  const handleChanges = (value, id) => {
    // console.log(value);
    // console.log(id);
    setEditData({ ...editData, [id]: value });
  };

  const handleNewSkillInputChange = (value, id) => {
    setNewSkill({ ...newSkill, [id]: value });
  };

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
      setImgUrl(imageUrl);
      setImgPublicId(res.data.public_id);
      console.log(imageUrl);
      console.log(res.data);
      //  setImgUrl(imageUrl);
      setImgPublicId(res.data.public_id);
    } catch (error) {
      // alert(error.message);
      errorMessage(error.message);
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
        setImgUrl(null);
        setSelectedImage(null);
        setImgPublicId(null);
        console.log("Image removed");
        successMessage("Image removed");
      } catch (error) {
        // alert(error.message);
        errorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
  };

  //handle close add skill pop up
  const handleCloseAddSkillPopUp = () => {
    setAddSkillPopUp(false);
    setNewSkill({
      name: "",
      img: "",
      percentage: "",
    });
    setImgUrl("");
  };

  const handleAddSkills = async () => {
    if (!newSkill.name || !newSkill.percentage || !imgUrl) {
      // alert("Please fill all the fields");
      errorMessage("Please fill all the fields");
    }
    const parsedPercentage = parseFloat(newSkill.percentage);
    if (
      isNaN(parsedPercentage) ||
      parsedPercentage < 0 ||
      parsedPercentage > 100
    ) {
      // alert("Please enter a valid percentage");
      errorMessage("Please enter a valid percentage");
      return;
    }
    try {
      const response = await userRequest.post("/skills/add", {
        name: newSkill.name,
        image: imgUrl,
        percentage: newSkill.percentage,
        cloudinaryId: imgPublicId,
      });
      const { skill, success, message } = response.data;
      console.log({ skill, success, message });
      if (success) {
        getSkills();
        handleCloseAddSkillPopUp();
        setSelectedImage(null);
        successMessage(message);
      }
    } catch (error) {
      console.log(error);
      const { message } = error.response.data;
      // console.log(message);
      errorMessage(message);
    }
  };

  const handleDeleteSkill = async (id) => {
    try {
      const response = await userRequest.delete(`/skills/delete/${id}`);
      const { success, message, skill } = response.data;
      console.log({ success, message });
      if (success) {
        getSkills();
        handleRemoveImg(skill.cloudinaryId);
        setEditPopUp(false);
        successMessage(message);
      }
    } catch (error) {
      console.log(error);
      const { message } = error.response.data;
      errorMessage(message);
    }
  };

  return (
    <>
      <div
        className={
          editPopUp
            ? "profileMngContainerBlur"
            : addSkillPopUp
            ? "profileMngContainerBlur"
            : "profileMngContainer"
        }
      >
        <TabHeader
          title="My Info and Skills"
          isAddButton={true}
          link={""}
          btnName={""}
        />
        <div className="profileMngWrapper">
          <div className="profileImgContainer">
            <img
              className="profileImg"
              src="https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="profile"
            />
            <div className="changeImgIconContainer">
              <MdPhotoCamera className="changeImgIcon" />
            </div>
            <div className="nameContainer">
              <div className="adminName">John Doe</div>
              <div className="position">Owner and Admin</div>
            </div>
          </div>
          <div className="ProfileMngTabContainer">
            <div className="profileMngTabWrapper">
              <div className="profileMngTab" onClick={() => setTab("myInfo")}>
                My Info
              </div>
              <div className="profileMngTab" onClick={() => setTab("mySkills")}>
                My Skills
              </div>
            </div>
            <div className="profileMngTabContentContainer">
              {tab === "myInfo" ? (
                <ProfileInfo />
              ) : (
                <>
                  <div className="skillAddBtnContainer">
                    <motion.div
                      className="SkillAddBtn"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      onClick={() => setAddSkillPopUp(true)}
                    >
                      <FaCirclePlus className="plusIcon" />
                      {/* <motion.div className="addProjectTxt">
                    <div className="alink2">Add Skill</div>
                  </motion.div> */}
                    </motion.div>
                  </div>
                  <div className="profileMngTabContentWrapperOne">
                    {skills.map((skill) => (
                      <ProfileSkills
                        setEditPopUp={setEditPopUp}
                        key={skill._id}
                        skill={skill}
                        setEditData={setEditData}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {editPopUp && (
        <>
          <div className="editPopContainer">
            <div
              className="skillEditCloseBtn"
              onClick={() => setEditPopUp(false)}
            >
              X
            </div>
            <div className="editPopUpContent">
              <div className="editFormGroup">
                <label htmlFor="name" className="profileMngLabel">
                  Image
                </label>
                <div className="skillImageUploader">
                  <div
                    className="drop-zone"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                  >
                    {editData.image ? (
                      <div className="selectedSkillImageContainer">
                        <img
                          src={`${editData.image}`}
                          className="selectedSkillImage"
                          alt="Selected"
                        />
                        <div className="trash-can-SkillOverlay">
                          <span
                            className="trash-can-icon"
                            // onClick={setEditData({ ...editData, image: "" })}
                            onClick={() => {
                              setEditData({ ...editData, image: "" });
                              console.log("delete image");
                            }}
                          >
                            <MdDeleteOutline />
                          </span>
                        </div>
                      </div>
                    ) : isLoading ? (
                      <p className="skillInsideText">UPLOADING .....</p>
                    ) : (
                      <p className="skillInsideText">
                        Drag & Drop an image or choose from file
                      </p>
                    )}
                  </div>
                  <label htmlFor="fileInput" className="customFileInput">
                    select
                    <input
                      type="file"
                      id="fileInput"
                      accept="image/*"
                      onChange={handleSelectFile}
                      // className="customSkillImgInput"
                    />
                  </label>
                </div>
              </div>
              <div className="editFormGroup">
                <label htmlFor="name" className="profileMngLabel">
                  Skill Name
                </label>
                <div className="profileMngData">
                  <input
                    type="text"
                    className="profileMngInput"
                    id="name"
                    value={editData.name}
                    onChange={(e) => handleChanges(e.target.value, e.target.id)}
                  />
                </div>
              </div>
              <div className="editFormGroup">
                <label htmlFor="name" className="profileMngLabel">
                  Percentage
                </label>
                <div className="profileMngData">
                  <input
                    type="text"
                    className="profileMngInput"
                    id="percentage"
                    value={editData.percentage}
                    // onChange={(e) =>
                    //   setEditData(e.target.value)
                    // }
                    onChange={(e) => handleChanges(e.target.value, e.target.id)}
                  />
                </div>
              </div>
              <div className="skillBtnContainer">
                <div
                  className="btn"
                  onClick={() => handleDeleteSkill(editData._id)}
                >
                  Delete
                </div>
                <div className="btn" onClick={() => handleSaveEdits()}>
                  save
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {addSkillPopUp && (
        <>
          <div className="editPopContainer">
            <div
              className="skillEditCloseBtn"
              onClick={handleCloseAddSkillPopUp}
            >
              X
            </div>
            <div className="editPopUpContent">
              <div className="editFormGroup">
                <label htmlFor="name" className="profileMngLabel">
                  Image
                </label>
                <div className="skillImageUploader">
                  <div
                    className="drop-zone"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                  >
                    {imgUrl ? (
                      <div className="selectedSkillImageContainer">
                        <img
                          src={`${imgUrl}`}
                          className="selectedSkillImage"
                          alt="Selected"
                        />
                        <div className="trash-can-SkillOverlay">
                          <span
                            className="trash-can-icon"
                            onClick={handleRemoveImg()}
                          >
                            <MdDeleteOutline />
                          </span>
                        </div>
                      </div>
                    ) : isLoading ? (
                      <p className="skillInsideText">UPLOADING .....</p>
                    ) : (
                      <p className="skillInsideText">
                        Drag & Drop an image or choose from file
                      </p>
                    )}
                  </div>
                  <label htmlFor="fileInput" className="customFileInput">
                    select
                    <input
                      type="file"
                      id="fileInput"
                      accept="image/*"
                      onChange={handleSelectFile}
                      // className="customSkillImgInput"
                    />
                  </label>
                </div>
              </div>
              <div className="editFormGroup">
                <label htmlFor="name" className="profileMngLabel">
                  Skill Name
                </label>
                <div className="profileMngData">
                  <input
                    type="text"
                    className="profileMngInput"
                    id="name"
                    value={newSkill.name}
                    placeholder="Enter Skill Name"
                    onChange={(e) =>
                      handleNewSkillInputChange(e.target.value, e.target.id)
                    }
                  />
                </div>
              </div>
              <div className="editFormGroup">
                <label htmlFor="name" className="profileMngLabel">
                  Percentage
                </label>
                <div className="profileMngData">
                  <input
                    type="text"
                    className="profileMngInput"
                    id="percentage"
                    value={newSkill.percentage}
                    placeholder="Enter Skill Percentage"
                    // onChange={(e) =>
                    //   setEditData(e.target.value)
                    // }
                    onChange={(e) =>
                      handleNewSkillInputChange(e.target.value, e.target.id)
                    }
                  />
                </div>
              </div>
              <div className="skillBtnContainer">
                <div className="skillBtn" onClick={() => handleAddSkills()}>
                  save
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProfileManagement;
