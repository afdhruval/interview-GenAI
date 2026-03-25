const express = require("express")
const authRouter = express.Router()
const authController = require("../controllers/auth.controller")
const authMiddelware = require("../middlewares/auth.middleware")

authRouter.post("/register", authController.registerHandle)

authRouter.post("/login", authController.loginHanlde)

authRouter.get("/logout", authController.logoutHandle)

authRouter.get("/getme", authMiddelware.identifyUser, authController.getmeUser)




module.exports = authRouter
