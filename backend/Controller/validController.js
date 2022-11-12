const Verification = require('../modals/Verification');
const otpGenerator = require('otp-generator');
const nodemailer = require("nodemailer");
const dotenv = require('dotenv').config();

const generateMail = async (otp, name, email) => {

    let htmlText = `
        <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
            <div style="margin:50px auto;width:70%;padding:20px 0">
                <div style="border-bottom:1px solid #eee">
                    <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">StudentDB</a>
                </div>
                <p style="font-size:1.1em">Hi, ${name} </p>
                <p>Thank you for registering for our NMAMIT Site. Use the following OTP to complete your Sign Up procedure.
                </p>
                <h2 
                    style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">
                    ${otp}</h2>
    
                <p style="font-size:0.9em;">Regards,<br />StudentDB</p>
                <hr style="border:none;border-top:1px solid #eee" />
            </div>
        </div>
    `

    let transporter = await nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: process.env.PORT_SENDGRID,
        auth: {
            user: 'apikey', // generated ethereal user
            pass: process.env.SENDGRID_API_KEY, // generated ethereal password
        },
    });

    var mailOptions = await {
        from: 'studentdb23@gmail.com',
        to: email,
        subject: 'OTP for StudentDB',
        html: htmlText
    };

    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("Error: " + error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

const getOTP = async (req, res) => {

    const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });

    const otpset = await new Verification({
        otp: otp,
        email: req.body.email,
        name: req.body.name,
        usn: req.body.usn
    })

    try {

        Verification.findOne({ email: req.body.email }, async (err, data) => {

            if (data) {
                if (data.verified) {
                    res.status(200).json("User already verified")
                    return
                } else {

                    Verification.findOne({ usn: req.body.usn }, async (err, data) => {
                        if (data) {

                            if (data.verified) {
                                res.status(200).json("User already verified")
                            }
                        }
                    })

                }
            }
            else if (!data) {
                otpset.save();
                // res.status(200).send(otpset);
                res.status(200).json("OTP sent successfully");
            }
            else {
                await Verification.findOneAndUpdate({ email: req.body.email }, {
                    $set: { otp: otp }
                })
                res.status(200).json("OTP sent successfully");
            }
            await generateMail(otp, req.body.name, req.body.email)
        })
    }
    catch (e) {
        console.log(e);
    }
}


const verifyOTP = async (req, res) => {
    try {

        Verification.findOne({ email: req.body.email }, async (err, data) => {
            if (data === null) {

                res.status(404).json("OTP/User not found")
                console.log("Error-> " + err);
            } else {
                const otp = req.body.otp
                if (data.otp === otp) {

                    res.status(200).json("OTP verified")
                } else {
                    res.status(200).json("OTP not verified")
                }
            }
        })

    } catch (e) {
        console.log(e);
        res.status(500).json(e)
    }

}




module.exports = { getOTP, verifyOTP }