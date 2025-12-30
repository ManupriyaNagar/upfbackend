const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    paragraph: {
      type: String,
      required: true
    },
    image: {
      type: String, // image path
      required: true
    },
    linkedinUrl: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
