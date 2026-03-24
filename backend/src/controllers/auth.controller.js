const userModel = require("../model/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cookieParser  = require("cookieparser")


async function registerHandle(req, res) {

    const { email, username, password } = req.body

    const isUserAlreadyExits = await userModel.findOne({
        $or: [
            { username }, { email }
        ]
    })

    if (isUserAlreadyExits) {
        return res.status(401).json({
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
        message: "user registerd successfully"
    })



}

module.exports = {
    registerHandle
}

