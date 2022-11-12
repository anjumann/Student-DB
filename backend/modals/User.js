const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    uuid: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    usn: {
        type: String,
        required: true,
        unique: true
    },
    isTeacher: {
        type: Boolean,
        default: false
    },
    branch:{
        type:String,
        default:''
    },
    semester: {
        type: String,
        default:''

    },
    section: {
        type: String,
        default:''
    },
    profilepic:{
        type:String,
        default:""
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    
    instagram: {
        type: String,
        default:''
    },
    github: {
        type: String,
        default:''
    },
    linkedin: {
        type: String,
        default:''
    }

},
    { timestamps: true }
)

module.exports = mongoose.model("Student", UserSchema)