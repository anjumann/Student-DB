const router = require('express').Router();

const { getAll, getByUsn, updateUserByUsn,updateUserByUid,getByUid  } = require('../Controller/userController')

router.get('/all',getAll );
router.get('/usn/:usn',getByUsn );
router.get('/uid/:uid',getByUid );
router.put('/uid/:uid',updateUserByUid );
router.put('/update/:usn', updateUserByUsn);


module.exports = router;