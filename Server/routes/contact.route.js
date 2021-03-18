const express = require('express');
const router = express.Router();
const controller = require('../controllers/contact.controller');

router.post('/touch',controller.contactPost);

module.exports = router;