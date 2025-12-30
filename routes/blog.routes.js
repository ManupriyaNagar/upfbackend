const express = require("express");
const router = express.Router();

const upload = require("../middleware/cloudUpload"); // or upload.js
const auth = require("../middleware/auth");
const blogController = require("../controller/blog.controller"); // fixed folder name

// CREATE BLOG (Admin only)
router.post("/", auth, upload.single("image"), blogController.createBlog);

// READ BLOGS (Public)
router.get("/", blogController.getBlogs);
router.get("/:id", blogController.getBlogById);

// UPDATE BLOG (Admin only)
router.put("/:id", auth, upload.single("image"), blogController.updateBlog);

// DELETE BLOG (Admin only)
router.delete("/:id", auth, blogController.deleteBlog);

module.exports = router;
