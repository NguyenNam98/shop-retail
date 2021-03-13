const express = require('express');
const router = express.Router();
const controller = require('../controllers/emailSubcribe.controller');

router.post('/subcribe',controller.contactPost);

module.exports = router;