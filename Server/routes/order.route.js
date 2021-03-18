const express = require('express');
const router = express.Router();
const controller = require('../controllers/order.controller');


router.post('/create', controller.postOrder);
router.get('/', controller.getOrder);


module.exports = router;