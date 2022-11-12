const router = require('express').Router()
var ImageKit = require("imagekit");
var fs = require('fs');
const dotenv = require('dotenv').config();


var imagekit = new ImageKit({
    publicKey : process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey : process.env.IMAGE_KIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGE_KIT_URL_ENDPOINT
});

var authenticationParameters = imagekit.getAuthenticationParameters()

router.get('/', (req, res)=>{
        try {
            res.status(200).json(authenticationParameters)
        } catch (error) {
            res.status(500).json(error)
        }
    })

module.exports = router;