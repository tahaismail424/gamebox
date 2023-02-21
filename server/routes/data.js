const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/userController');

router.get('/', user_controller.user_create_get);

router.post('/post-user', user_controller.user_create_post);

router.post('/login', user_controller.user_authenticate, user_controller.user_authenticate_callback);

router.get('/get-user', user_controller.user_send);

module.exports = router;

