const router = require("express").Router();
const { login } = require("../controller/admin.controller"); // fixed folder name

router.post("/login", login);

module.exports = router;
