const checkEmailMiddleware = (req, res, next) => {
  const emailRegex = /@gmail.com$/;
  const { username } = req.body;

  if (!emailRegex.test(username)) {
    res.status(403).send("403 Error: Email must end with @gmail.com");
  } else {
    next();
  }
};

module.exports = { checkEmailMiddleware };
