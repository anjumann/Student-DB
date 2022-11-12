const router = require('express').Router();
const {createPost, deletePost,getAllPostByUsn,updatePostByPid, getPostByPid,getAllPost} = require('../Controller/postControllers')


//create Post
router.post('/create', createPost)

//delete post by ppid
router.delete('/delete/:ppid', deletePost)

//get all post 
router.get('/all',getAllPost)

//get all post by usn
router.get('/all/:usn',getAllPostByUsn )

//get all post by ppid
router.get('/ppid/:ppid',getPostByPid)

// update post by ppid
router.put('/update/:ppid',updatePostByPid )





module.exports = router;