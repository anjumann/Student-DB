const mongoose = require('mongoose')

const Verfication = new mongoose.Schema({

    usn: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    email:{
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Verification", Verfication)

    