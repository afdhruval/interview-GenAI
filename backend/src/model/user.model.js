const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    emial: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


const userModel = mongoose.model("users",userSchema)

module.exports = userModel