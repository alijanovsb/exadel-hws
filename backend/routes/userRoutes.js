require("dotenv").config();
const express = require("express");
const userControllers = require("../controllers/userController");

const router = express.Router();

router.post("/login", userControllers.authUser);
router.post("/random", userControllers.random);
router.route("/register").post(userControllers.registerUser);

module.exports = router;
