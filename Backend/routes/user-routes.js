const express = require("express");
const router = express.Router();
const usersController = require("../controller/user-controller")
const requireAuth = require("../middleware/requireAuth");


//Routing
router.post("/signup", usersController.signup);
router.post("/login", usersController.login);
router.get("/logout", usersController.logout);
router.get("/check-auth", requireAuth, usersController.checkAuth);
module.exports = router;