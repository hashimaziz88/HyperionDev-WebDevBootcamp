const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/tasks");
const {
  authMiddleware,
  gmailCheckMiddleware,
  jsonContentMiddleware,
} = require("./middlewares");

const app = express();
const PORT = process.env.PORT || 5000;

// Replace the connection string with your MongoDB Atlas connection string
const MONGODB_URI =
  "mongodb+srv://hashim:T57I0sGavro0TKlU@practicecluster.bweei76.mongodb.net/todoapp";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.use(cors());
app.use(bodyParser.json());
app.use(jsonContentMiddleware);

app.use("/api/auth", authRoutes);
app.use("/api/tasks", authMiddleware, gmailCheckMiddleware, taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
