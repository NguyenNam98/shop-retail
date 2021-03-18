const { Router } = require("express")

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller');


router.get('/', controller.index);
router.get('/:id', controller.productId)
router.post('/review/:id', controller.reviewProduct)

module.exports = router;