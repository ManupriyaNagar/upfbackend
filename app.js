const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("MONGO_URI is missing in .env");
  process.exit(1);
}

const hasValidScheme =
  MONGO_URI.startsWith("mongodb://") || MONGO_URI.startsWith("mongodb+srv://");

if (!hasValidScheme) {
  console.error('Invalid MONGO_URI scheme. It must start with "mongodb://" or "mongodb+srv://".');
  console.error(`Current MONGO_URI: ${MONGO_URI}`);
  process.exit(1);
}

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });

app.use("/api/auth", require("./routes/admin.routes"));
app.use("/api/blogs", require("./routes/blog.routes"));

module.exports = app;
