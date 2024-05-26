// backend/middleware/tokenCheckMiddleware

const User = require("../models/user.model");

// Check if user token exists in database
const tokenCheckMiddleware = (req, res, next) => {
  const { token_storage } = req.body;

  try {
    User.findOne({ user_jwt: token_storage }).then((user) => {
      if (!user) {
        res.status(401).send("401 Error, user is not known");
      } else {
        next();
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { tokenCheckMiddleware };
