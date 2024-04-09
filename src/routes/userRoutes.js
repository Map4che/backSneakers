const express = require("express");
const router = express.Router();
const response = require("../utils/response");
const userSchema = require("../models/user");

router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => response.success(res, data))
    .catch((err) => response.error(res, err.message));
});

module.exports = router;
