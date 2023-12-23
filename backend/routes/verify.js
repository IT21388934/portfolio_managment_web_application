const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  const authHeader = req.headers.token;

  if (!authHeader) {
    return res.status(401).json("You are not authenticated!");
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json("Invalid token format");
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json("Token is not valid!");
    }

    req.user = user;
    next();
  });
};

const verifyAndAuth = (req, res, next) => {
  verify(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!");
    }
  });
};

module.exports = { verify, verifyAndAuth };
