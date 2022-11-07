
const express = require('express');
const blogController = require('../Controllers/blogControlers');


const router = express.Router();


// blog routes 
router.get('/',blogController.blog_index);

router.post('/',blogController.blog_create_post);

// blog create
router.get('/create',blogController.blog_create_get);


router.get('/:id',blogController.blog_details);

// delete request

router.delete('/:id', blogController.blog_delete);



module.exports = router;

