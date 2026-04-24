const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.get("/:userId", authController.getUserById);

module.exports = router;
