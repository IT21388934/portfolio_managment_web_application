const Message = require("../models/messageModel");

const { verify, verifyAndAuth } = require("../routes/verify");

exports.addMessage = async (req, res) => {
  const { name, email, phone, msg } = req.body;
  try {
    const message = new Message({ name, email, phone, msg });

    const savedMessage = await message.save();

    res.status(201).json({
      success: true,
      message: "Message created successfully",
      savedMessage: savedMessage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create message",
      error: error.message,
    });
  }
};

exports.getAllMessages = async (req, res) => {
  try {
    verifyAndAuth(req, res, async () => {
      try {
        const messages = await Message.find().sort({ createdAt: -1 });
        if (!messages) {
          return res.status(404).json({
            success: false,
            message: "No message found",
          });
        }
        res.status(200).json({
          success: true,
          message: "Messages fetched successfully",
          messagesData: messages,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to get messages",
          error: error.message,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get messages, Login again",
      error: error.message,
    });
  }
};

exports.getSingleMessage = async (req, res) => {
  try {
    verifyAndAuth(req, res, async () => {
      try {
        const message = await Message.findById(req.params.id);
        if (!message) {
          return res.status(404).json({
            success: false,
            message: "No message found",
          });
        }
        res.status(200).json({
          success: true,
          message: "Message fetched successfully",
          messagesData: message,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to get message",
          error: error.message,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get message",
      error: error.message,
    });
  }
};

// exports.deleteMessage = async (req, res) => {
//   try {
//     verifyAndAuth(req, res, async () => {
//       try {
//         const message = await Message.findById(req.params.id);
//         if (!message) {
//           return res.status(404).json({
//             success: false,
//             message: "No message found",
//           });
//         }
//         await message.remove();
//         res.status(200).json({
//           success: true,
//           message: "Message deleted successfully",
//         });
//       } catch (error) {
//         res.status(500).json({
//           success: false,
//           message: "Failed to delete message",
//           error: error.message,
//         });
//       }
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to delete message",
//       error: error.message,
//     });
//   }
// };

exports.deleteMessage = async (req, res) => {
  try {
    verifyAndAuth(req, res, async () => {
      try {
        const messageId = req.params.id;
        const deletedMessage = await Message.findByIdAndDelete(messageId);

        if (!deletedMessage) {
          return res.status(404).json({
            success: false,
            message: "No message found",
          });
        }
        res.status(200).json({
          success: true,
          message: "Message deleted successfully",
          deletedMessage: deletedMessage,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to delete message",
          error: error.message,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete message",
      error: error.message,
    });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    verifyAndAuth(req, res, async () => {
      try {
        const message = await Message.findById(req.params.id);
        if (!message) {
          return res.status(404).json({
            success: false,
            message: "No message found",
          });
        }
        message.status = req.body.status;
        await message.save();
        res.status(200).json({
          success: true,
          message: "Status updated successfully",
          UpdatedMessage: message,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to update status",
          error: error.message,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Login again",
      error: error.message,
    });
  }
};
