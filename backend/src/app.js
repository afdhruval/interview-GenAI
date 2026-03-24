const dotenv = require("dotenv/config")
const express = require("express")
const authRouter = require("../src/routes/auth.routes")
const CookieParser = require("cookieparser")

// middlewares
const app = express()
app.use(express.json())
app.use(CookieParser())

// routes
app.use("/api/auth", authRouter)

module.exports = app