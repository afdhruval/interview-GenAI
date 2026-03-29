const dotenv = require("dotenv/config")
const express = require("express")
const authRouter = require("../src/routes/auth.routes")
const cookieParser = require("cookie-parser")
const cors = require("cors")


// middlewares
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))


// routes
app.use("/api/auth", authRouter)

module.exports = app