const jwt = require("jsonwebtoken")
const blacklistModel = require("../model/blacklist.model")


async function identifyUser(req, res, next) {

    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "Token not provided"
        })
    }

    const istokenBlacklisted = await blacklistModel.findOne({
        token
    })

    if (istokenBlacklisted) {
        return res.status(401).json({
            message: "token is invalid"
        })
    }

    let decoded = null

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (err) {
        return res.status(401).json({
            message: "invalid token"
        })
    }

}

module.exports = {
    identifyUser
}

