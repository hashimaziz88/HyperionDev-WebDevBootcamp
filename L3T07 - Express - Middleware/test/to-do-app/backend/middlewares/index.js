const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).send("Access denied");
  try {
    const decoded = jwt.verify(token, "your_jwt_secret");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send("Invalid token");
  }
};

exports.gmailCheckMiddleware = (req, res, next) => {
  if (!req.user.username.endsWith("@gmail.com")) {
    return res.status(403).send("Access denied");
  }
  next();
};

exports.jsonContentMiddleware = (req, res, next) => {
  if (req.is("json")) {
    next();
  } else {
    res.status(400).send("Only JSON content is allowed");
  }
};
