const userModel = require("../model/user.model")
const blacklistModel = require("../model/blacklist.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


async function registerHandle(req, res) {

    const { email, username, password } = req.body

    const isUserAlreadyExits = await userModel.findOne({
        $or: [
            { email }, { username }
        ]
    })

    if (isUserAlreadyExits) {
        return res.status(409).json({
            message: "user already exits"
        })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        email, username, password: hash
    })

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "user registerd successfully",
        user
    })



}

async function loginHanlde(req, res) {

    const { email, username, password } = req.body

    const user = await userModel.findOne({
        $or: [
            { username }, { email }
        ]
    })

    if (!user) {
        return res.status(400).json({
            message: "user not exitss"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return res.status(400).json({
            message: "passwor is invalid"
        })
    }

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(200).json({
        message: "user logged in",
        user: {
            id: user._id,
            name: user.username,
            email: user.email
        }
    })



}

async function logoutHandle(req, res) {


    const token = req.cookies.token

    console.log(req.cookies.token);

    if (token) {
        await blacklistModel.create({ token })
    }

    res.clearCookie("token")

    res.status(200).json({
        message: "user logged-out successfully"
    })

}

async function getmeUser(req, res) {

    const user = await userModel.findById(req.user.id)

    res.status(200).json({
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })

}

module.exports = {
    registerHandle, loginHanlde, logoutHandle, getmeUser
}

