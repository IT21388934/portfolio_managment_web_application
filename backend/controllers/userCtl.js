const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { verify, verifyAndAuth } = require("../routes/verify");

exports.addUser = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;
    const user = new User({ name, email, password, isAdmin });

    const savedUser = await user.save();

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create user",
      error: error.message,
    });
  }
};

//register user
exports.register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    //handle existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({
        success: false,
        message: "User already exists",
      });
      return;
    }

    //hashing password
    let hashedPassword;

    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to hash password",
        error: error.message,
      });
      return;
    }

    const user = new User({ email, password: hashedPassword, name });
    const savedUser = await user.save();

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to sign in",
      error: error.message,
    });
  }
};

//user login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  //handle login
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
      return;
    } else {
      passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
        return;
      } else {
        const accessToken = jwt.sign(
          {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );

        const { password, ...others } = user._doc;
        res.status(200).json({
          success: true,
          message: "Login successful",
          user: others,
          accessToken,
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to login",
      error: error.message,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  // try {
  //   const users = await User.find({});

  //   res.status(200).json({
  //     success: true,
  //     message: "Get all users successfully",
  //     users,
  //   });
  // } catch (error) {
  //   res.status(500).json({
  //     success: false,
  //     message: "Failed to get all users",
  //     error: error.message,
  //   });
  // }
  try {
    verifyAndAuth(req, res, async () => {
      const users = await User.find({});

      res.status(200).json({
        success: true,
        message: "Get all users successfully",
        users,
      });
    });
  } catch (error) {
    res.status(403).json({
      success: false,
      message: "You are not allowed to do that!",
    });
  }
};
