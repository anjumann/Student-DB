const User = require('../modals/User')
const Verification = require('../modals/Verification')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    try {
        const duplicate = await User.findOne({ email: req.body.email })
        const duplicateusn = await User.findOne({ usn: req.body.usn })
        if (duplicate || duplicateusn) {
            res.status(200).json("User already exists")
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            const uuid = uuidv4();
       
            const newUser = new User({
                uuid: uuid,
                name: req.body.name,
                email: req.body.email.toLowerCase(),
                password: hashedPassword,
                usn: req.body.usn.toLowerCase(),
                isTeacher: req.body.isTeacher,
                branch: req.body.branch,
                semester: req.body.semester,
                section: req.body.section,
                instagram: req.body.instagram,
                github: req.body.github,
                linkedin: req.body.linkedin
            })
            
            await Verification.findOneAndUpdate({ email: req.body.email }, {
                $set: { verified: true }
            })
            const user = await newUser.save()
            res.status(200).json(user)
        }
    } catch (e) {
        res.status(500).json({
            status: "500",
            error: { e }
        })
    }
}


const login = async (req, res) => {

    try {
        
        const user = await User.findOne({ usn: req.body.usn.toLowerCase() })
        const validate = await bcrypt.compare(req.body.password, user.password);

        // const validate = await (req.body.password === user.password)
        if (!user) {
            res.status(404).json("user not found");
        } else if (!validate) {
            res.status(404).json("Wrong password")
        }
        else {
            const { password, ...others } = user._doc;
            res.status(200).json(others);

        }


    } catch (error) {
        console.log("Error is " + error);
        res.status(500).json(error);
    }

}

module.exports = { register, login }