const { Router } = require("express");
const userController = require("../controllers/UserController");

const router = Router();

router.route("/").post(userController.create);

router.route("/:id").delete(userController.delete);

router.post("/sign-in", userController.signIn);

router.post("/register", userController.register);

module.exports = router;
