const express = require("express");
const router = express.Router();
const testUser = require("../controllers/userControllers");

router.get("/test", testUser);

module.exports = router;
