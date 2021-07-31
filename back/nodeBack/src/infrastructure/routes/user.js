const express = require('express');
const router = express.Router();

const createUserController = require('../controller/UserController')

router.get('/getuser/:_id', createUserController())

module.exports = router; 