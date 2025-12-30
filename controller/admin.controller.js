const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { pin } = req.body;
  const ADMIN_PIN = process.env.ADMIN_PIN || "admin123";

  // Simple PIN verification
  if (pin !== ADMIN_PIN) {
    return res.status(401).json({ message: "Invalid PIN" });
  }

  // Generate a dummy token since we don't have a user ID from DB
  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({ token });
};
