import { useEffect, useState } from "react";
import TabHeader from "../admniDashCom/TabHeader";
import { userRequest } from "../../../requestMethods";
import MessageCard from "./MessageCard";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { successMessage, errorMessage } from "../../toastMessage/toastMessage";

import "./message.css";

function Messages() {
  const [singleMessagePopUp, setSingleMessagePopUp] = useState(false);
  const [singleMessageData, setSingleMessageData] = useState({});
  const [messagesData, setMessagesData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortQuery, setSortQuery] = useState("newest");

  //-----------------------------------HANDLE SEARCH------------------------------
  useEffect(() => {
    searchQuery === "" ? getMessages() : searchMessages();
  }, [searchQuery]);

  const searchMessages = async () => {
    const filteredMessages = messagesData.filter(
      (message) =>
        message.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        message.msg.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setMessagesData(filteredMessages);
  };

  //HANDLE SORT
  useEffect(() => {
    if (sortQuery === "newest") {
      setMessagesData((prev) =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sortQuery === "oldest") {
      setMessagesData((prev) =>
        [...prev].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      );
    }
  }, [sortQuery]);

  //-----------------------------------GET ALL MESSAGES --------------------------------------
  const getMessages = async () => {
    try {
      const response = await userRequest.get("/messages/all");
      const { success, message, messagesData } = response.data;
      console.log({
        success: success,
        message: message,
        messagesData: messagesData,
      });
      if (success) {
        setMessagesData(messagesData);
      } else {
        alert(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  //-----------------------------HANDLE STATUS CHANGE--------------------------------------
  const handleStatusChange = async (id, status) => {
    console.log({ id: id, status: status });
    try {
      const response = await userRequest.put(`/messages/changeStatus/${id}`, {
        status: status,
      });

      const { success, message, UpdatedMessage } = response.data;
      console.log({
        success: success,
        message: message,
        UpdatedMessage: UpdatedMessage,
      });
      if (success) {
        getMessages();
        // successMessage(message);
      } else {
        // alert(message);
        errorMessage(message);
      }
    } catch (error) {
      console.log(error);
      errorMessage(error.response.data.error);
    }
  };

  const handleDeleteMessage = async (id) => {
    try {
      const response = await userRequest.delete(`/messages/${id}`);
      const { success, message, messagesData } = response.data;
      console.log({
        success: success,
        message: message,
        messagesData: messagesData,
      });
      if (success) {
        getMessages();
        successMessage(message);
      } else {
        errorMessage(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="centeredDiv">
        <div
          className={singleMessagePopUp ? "msgContainerBlur" : "msgContainer"}
        >
          <TabHeader
            title="Messages"
            isAddButton={false}
            link={""}
            btnName={""}
          />
          <div className="sortAndSearchHeader">
            <div className="searchContainer">
              <input
                type="text"
                className="searchBox"
                placeholder="Search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
              <FaSearch />
            </div>
            <div className="sortContainer">
              <select
                name="sort"
                id="sort"
                onChange={(e) => setSortQuery(e.target.value)}
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                {/* <option value="unread">Unread</option>
                <option value="read">Read</option> */}
              </select>
            </div>
          </div>
          <div className="profileMngWrapper">
            {messagesData.map((message) => (
              <MessageCard
                message={message}
                key={messagesData._id}
                setSingleMessagePopUp={setSingleMessagePopUp}
                setSingleMessageData={setSingleMessageData}
                handleStatusChange={handleStatusChange}
                handleDeleteMessage={handleDeleteMessage}
              />
            ))}
          </div>
        </div>
        {singleMessagePopUp && (
          <div className="singleMsgPopUpContainer">
            <div
              className="msgPopUpCloseBtn"
              onClick={() => {
                setSingleMessagePopUp(false);
                // handleStatusChange(singleMessageData._id, "read");
              }}
            >
              <IoMdClose />
            </div>
            <div className="singleMsgData">
              <div className="singleMsgPopUpHeader">
                <h2>{singleMessageData.name}</h2>
                <p>{singleMessageData.email}</p>
              </div>
              <div className="singleMsgPopUpBody">
                <p>{singleMessageData.msg}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Messages;
