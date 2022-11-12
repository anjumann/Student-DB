const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    ppid: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    userusn: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        default: ""
    },
    likes: {
        type: Array,
        default: []
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("Post", PostSchema)