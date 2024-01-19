import PropTypes from "prop-types";
import { useState } from "react";
import { IoMdMailUnread } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

function MessageCard({
  message,
  setSingleMessagePopUp,
  setSingleMessageData,
  handleStatusChange,
  handleDeleteMessage,
}) {
  const data = message;

  const [iconHovered, setIconHovered] = useState(false);
  const [deleteHovered, setDeleteHovered] = useState(false);

  const handleSingleMessagePopUp = ({ status }) => {
    setSingleMessageData(data);
    setSingleMessagePopUp(true);

    handleStatusChange(data._id, status);
  };

  const handleClickOnStatusIcon = ({ status }) => {
    handleStatusChange(data._id, status);
    console.log({ status: status });
  };

  return (
    <div
      className={
        data.status === "unread" ? "msgCardContainer" : "msgCardContainerRead"
      }
      //   onClick={handleSingleMessagePopUp}
    >
      <div
        className="msgInfoContainer"
        onClick={() => {
          handleSingleMessagePopUp({ status: "read" });
        }}
      >
        <div className="senderName">{data.name}</div>
        <div>{data.msg}</div>
      </div>
      {data.status === "unread" ? (
        <>
          <div
            className="msgCardIcon"
            onMouseEnter={() => setIconHovered(true)}
            onMouseLeave={() => setIconHovered(false)}
            onClick={() => {
              handleClickOnStatusIcon({ status: "read" });
            }}
          >
            <MdMarkEmailRead />
          </div>
          {iconHovered && <div className="msgCardIconHovered">Make read</div>}
        </>
      ) : (
        <div
          className="msgCardIcon"
          onMouseEnter={() => setIconHovered(true)}
          onMouseLeave={() => setIconHovered(false)}
          onClick={() => {
            handleClickOnStatusIcon({ status: "unread" });
          }}
        >
          <IoMdMailUnread />
          {iconHovered && <div className="msgCardIconHovered">Make Unread</div>}
        </div>
      )}
      <div
        className="msgCardIcon"
        onMouseEnter={() => setDeleteHovered(true)}
        onMouseLeave={() => setDeleteHovered(false)}
        onClick={() => {
          handleDeleteMessage(data._id);
        }}
      >
        <FaTrash />
        {deleteHovered && <div className="msgCardIconHovered">Delete</div>}
      </div>
    </div>
  );
}

MessageCard.propTypes = {
  message: PropTypes.shape({
    message: PropTypes.object.isRequired,
  }),
  setSingleMessagePopUp: PropTypes.func.isRequired,
  setSingleMessageData: PropTypes.func.isRequired,
  handleStatusChange: PropTypes.func.isRequired,
  handleDeleteMessage: PropTypes.func.isRequired,
};

export default MessageCard;
