const express = require("express");
const router = express.Router();

const controller= require('../controllers/Chat.controller');

router.get('/',controller.index);
router.get('/:sessionId',controller.data);
router.post('/',controller.new);

module.exports=router