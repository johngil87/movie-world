const express = require('express');
const router = express.Router();

const getCategoriesController = require('../controller/CategoryController')

router.get('/getcategories', getCategoriesController())

module.exports = router; 