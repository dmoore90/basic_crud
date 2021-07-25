const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();

router.get('/', controller.getPosts);
router.post('/', controller.createPost);
router.get('/update_post/:id', controller.getPost);
router.post('/update_post', controller.updatePost);
router.post('/delete_post', controller.deletePost);

module.exports = router;