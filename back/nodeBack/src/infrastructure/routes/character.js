const express = require('express');
const router = express.Router();

const createCharacterController = require('../controller/CharacterController')

router.get('/getcharacter/:_id', createCharacterController())

module.exports = router; 