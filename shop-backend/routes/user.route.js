const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');
const jwtMidleware=require('../Middleware/token.middleware');

router.get('/login',jwtMidleware.verifyJwt,controller.index);
router.post('/login',controller.userPost);
router.post('/register',controller.registerPost);

module.exports = router;