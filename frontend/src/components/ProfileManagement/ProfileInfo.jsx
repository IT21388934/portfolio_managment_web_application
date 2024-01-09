import { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";

function ProfileInfo() {
  const [firstName, setFirstName] = useState("Rumesh");
  const [lastName, setLastName] = useState("Siriwardhana");
  const [contactNo, setContactNo] = useState("+94779011093");
  const [email, setEmail] = useState("siriwardhanarumesh@gmail.com");
  const [address, setAddress] = useState(
    "637, Galagawahenawaththa, kudagammana, Giriulla, Sri Lanka"
  );
  const [resume, setResume] = useState(
    "https://www.linkedin.com/in/rumesh-siriwardhana/"
  );
  const [description, setDescription] = useState("I am a Full Stack Developer");
  const [faceBook, setFaceBook] = useState("https://www.facebook.com/");
  const [linkedIn, setLinkedIn] = useState("https://www.linkedin.com/");
  const [gitHub, setGitHub] = useState("");
  const [flicker, setFlicker] = useState("https://www.flickr.com/");

  const [changed, setChanged] = useState(false);
  const [changeInput, setChangeInput] = useState(null);
  const handleEnableChange = (e) => {
    // setChangeEnabled(!changeEnabled);
    changeInput === e.id ? setChangeInput(null) : setChangeInput(e.id);
  };

  const handleChange = (value, id) => {
    switch (id) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "contactNo":
        setContactNo(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "resume":
        setResume(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "faceBook":
        setFaceBook(value);
        break;
      case "linkedIn":
        setLinkedIn(value);
        break;
      case "gitHub":
        setGitHub(value);
        break;
      case "flicker":
        setFlicker(value);
        break;
      default:
        break;
    }
    setChanged(true);
  };

  useEffect(() => {
    // console.log(`changeEnabled: ${changeEnabled}`);
    console.log({ "Enable Edit for ": changeInput });
  }, [changeInput]);
  return (
    <div>
      <>
        <div className="profileMngTabContentWrapperOne">
          <div className="infoGroup">
            <div className="profileMngLabelContainer">
              <label htmlFor="fistName" className="profileMngLabel">
                First Name
              </label>
              {changeInput === "firstName" && (
                <div className="editEnabled">Edit Enabled</div>
              )}
            </div>
            <div className="profileMngData">
              <input
                type="text"
                id="fistName"
                disabled={changeInput !== "firstName"}
                value={firstName}
                className="profileMngInput"
                onChange={(e) => handleChange(e.target.value, e.target.id)}
              />

              <MdEdit
                className={"profileDataEditIcon"}
                onClick={() => handleEnableChange({ id: "firstName" })}
              />
            </div>
          </div>
          <div className="infoGroup">
            <div className="profileMngLabelContainer">
              <label htmlFor="lastName" className="profileMngLabel">
                Last Name
              </label>
              {changeInput === "lastName" && (
                <div className="editEnabled">Edit Enabled</div>
              )}
            </div>
            <div className="profileMngData">
              <input
                type="text"
                className="profileMngInput"
                id="lastName"
                disabled={changeInput !== "lastName"}
                value={lastName}
                // placeholder="Enter Project Link"
                onChange={(e) => handleChange(e.target.value, e.target.id)}
              />
              <MdEdit
                className="profileDataEditIcon"
                onClick={() => handleEnableChange({ id: "lastName" })}
              />
            </div>
          </div>
          <div className="infoGroup">
            <div className="profileMngLabelContainer">
              <label className="profileMngLabel" htmlFor="contactNo">
                Contact No
              </label>
              {changeInput === "contactNo" && (
                <div className="editEnabled">Edit Enabled</div>
              )}
            </div>
            <div className="profileMngData">
              <input
                type="text"
                className="profileMngInput"
                id="contactNo"
                disabled={changeInput !== "contactNo"}
                value={contactNo}
                // placeholder="Enter Project Link"
                onChange={(e) => handleChange(e.target.value, e.target.id)}
              />
              <MdEdit
                className="profileDataEditIcon"
                onClick={() => handleEnableChange({ id: "contactNo" })}
              />
            </div>
          </div>
          <div className="infoGroup">
            <div className="profileMngLabelContainer">
              <label className="profileMngLabel" htmlFor="email">
                Email
              </label>
              {changeInput === "email" && (
                <div className="editEnabled">Edit Enabled</div>
              )}
            </div>
            <div className="profileMngData">
              <input
                type="email"
                className="profileMngInput"
                id="email"
                disabled={changeInput !== "email"}
                value={email}
                // placeholder="Enter Project Link"
                onChange={(e) => handleChange(e.target.value, e.target.id)}
              />
              <MdEdit
                className="profileDataEditIcon"
                onClick={() => handleEnableChange({ id: "email" })}
              />
            </div>
          </div>
          <div className="infoGroup">
            <div className="profileMngLabelContainer">
              <label className="profileMngLabel" htmlFor="address">
                Address
              </label>
              {changeInput === "address" && (
                <div className="editEnabled">Edit Enabled</div>
              )}
            </div>
            <div className="profileMngData">
              <input
                type="text"
                className="profileMngInput"
                id="address"
                disabled={changeInput !== "address"}
                value={address}
                // placeholder="Enter Project Link"

                onChange={(e) => handleChange(e.target.value, e.target.id)}
              />
              <MdEdit
                className="profileDataEditIcon"
                onClick={() => handleEnableChange({ id: "address" })}
              />
            </div>
          </div>
          <div className="infoGroup">
            <div className="profileMngLabelContainer">
              <label className="profileMngLabel" htmlFor="resume">
                Resume Link
              </label>
              {changeInput === "resume" && (
                <div className="editEnabled">Edit Enabled</div>
              )}
            </div>
            <div className="profileMngData">
              <input
                type="text"
                className="profileMngInput"
                id="resume"
                disabled={changeInput !== "resume"}
                value={resume}
                // placeholder="Enter Project Link"
                onChange={(e) => handleChange(e.target.value, e.target.id)}
              />
              <MdEdit
                className="profileDataEditIcon"
                onClick={() => handleEnableChange({ id: "resume" })}
              />
            </div>
          </div>

          {/* <!-- social media links --> */}
          <div className="infoGroup">
            <div className="profileMngLabelContainer">
              <label className="profileMngLabel" htmlFor="faceBook">
                FaceBook Link
              </label>
              {changeInput === "faceBook" && (
                <div className="editEnabled">Edit Enabled</div>
              )}
            </div>
            <div className="profileMngData">
              <input
                type="faceBook"
                className="profileMngInput"
                id="faceBook"
                disabled={changeInput !== "faceBook"}
                value={faceBook}
                // placeholder="Enter Project Link"
                onChange={(e) => handleChange(e.target.value, e.target.id)}
              />
              <MdEdit
                className="profileDataEditIcon"
                onClick={() => handleEnableChange({ id: "faceBook" })}
              />
            </div>

            <div className="profileMngLabelContainer">
              <label className="profileMngLabel" htmlFor="linkedIn">
                LinkedIn Link
              </label>
              {changeInput === "linkedIn" && (
                <div className="editEnabled">Edit Enabled</div>
              )}
            </div>
            <div className="profileMngData">
              <input
                type="linkedIn"
                className="profileMngInput"
                id="linkedIn"
                disabled={changeInput !== "linkedIn"}
                value={linkedIn}
                // placeholder="Enter Project Link"
                onChange={(e) => handleChange(e.target.value, e.target.id)}
              />
              <MdEdit
                className="profileDataEditIcon"
                onClick={() => handleEnableChange({ id: "linkedIn" })}
              />
            </div>
            <div className="profileMngLabelContainer">
              <label className="profileMngLabel" htmlFor="gitHub">
                GitHub Link
              </label>
              {changeInput === "gitHub" && (
                <div className="editEnabled">Edit Enabled</div>
              )}
            </div>
            <div className="profileMngData">
              <input
                type="gitHub"
                className="profileMngInput"
                id="gitHub"
                disabled={changeInput !== "gitHub"}
                value={gitHub}
                onChange={(e) => handleChange(e.target.value, e.target.id)}
              />
              <MdEdit
                className="profileDataEditIcon"
                onClick={() => handleEnableChange({ id: "gitHub" })}
              />
            </div>
            <div className="profileMngLabelContainer">
              <label className="profileMngLabel" htmlFor="flicker">
                Flicker Link
              </label>
              {changeInput === "flicker" && (
                <div className="editEnabled">Edit Enabled</div>
              )}
            </div>
            <div className="profileMngData">
              <input
                type="flicker"
                className="profileMngInput"
                id="flicker"
                disabled={changeInput !== "flicker"}
                value={flicker}
                // placeholder="Enter Project Link"
                onChange={(e) => handleChange(e.target.value, e.target.id)}
              />
              <MdEdit
                className="profileDataEditIcon"
                onClick={() => handleEnableChange({ id: "flicker" })}
              />
            </div>
          </div>
          <div className="infoGroup">
            <div className="profileMngLabelContainer">
              <label className="profileMngLabel" htmlFor="description">
                Description
              </label>
              {changeInput === "description" && (
                <div className="editEnabled">Edit Enabled</div>
              )}
            </div>
            <div className="profileMngData">
              <textarea
                type="textArea"
                className="profileMngDesInput"
                id="description"
                disabled={changeInput !== "description"}
                value={description}
                // placeholder="Enter Project Link"
                onChange={(e) => handleChange(e.target.value, e.target.id)}
              />
              <MdEdit
                className="profileDataEditIcon"
                onClick={() => handleEnableChange({ id: "description" })}
              />
            </div>
          </div>
        </div>
        {changed && (
          <div className="profileMngBtnContainer">
            <div className="profileMngSaveBtn green">Clear</div>
            <div className="profileMngSaveBtn">Save</div>
          </div>
        )}
      </>
    </div>
  );
}

export default ProfileInfo;
