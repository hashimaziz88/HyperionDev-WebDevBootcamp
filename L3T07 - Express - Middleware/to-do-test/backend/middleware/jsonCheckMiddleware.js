// backend/middleware/jsonCheckMiddleware
const jsonCheckMiddleware = (req, res, next) => {
  // Check what content we are getting by their type
  const contentType = req.get("Content-Type");

  //  Valid JSON check learned from
  //   Avanigupta (no date) Use JSON content-type for key-values - azure app configuration,
  //   Use JSON content-type for key-values - Azure App Configuration | Microsoft Learn.
  //   Available at: https://learn.microsoft.com/en-us/azure/azure-app-configuration/howto-leverage-json-content-type#valid-json-content-type (Accessed: 06 November 2023).
  try {
    if (!contentType || !contentType.startsWith("application/json")) {
      res
        .status(400)
        .send({ message: "This site only accepts JSON requests!" });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { jsonCheckMiddleware };
