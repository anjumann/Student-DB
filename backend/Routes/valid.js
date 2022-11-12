const router = require('express').Router();
const { getOTP, verifyOTP } = require('../Controller/validController');


router.post('/sendotp', getOTP);
router.post('/verifyotp', verifyOTP);
// router.post('/email',sendMail)

module.exports = router;