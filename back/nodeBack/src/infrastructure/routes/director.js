const express = require('express');
const router = express.Router();

const createDirectorController = require('../controller/DirectorController')

router.get('/getdirector/:_id', createDirectorController())

module.exports = router; 