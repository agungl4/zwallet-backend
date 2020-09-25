const userRouter = require("express").Router();
const userController = require("../controllers/user.controller");
const singleFileUpload = require("../helpers/middleware/singleFileUpload");

userRouter.patch(
	"/:id",
	singleFileUpload.profileImageUpload,
	userController.updateUser
);

userRouter.post("/contact", userController.addContact);

module.exports = userRouter;