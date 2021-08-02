const express = require('express');
const router = express.Router();

const {findUser, showFavorites} = require('../controller/UserController')

const findUserbyId = findUser();
const showUserFavorites = showFavorites();

router.get('/getuser/:_id', findUserbyId)
router.get('/getuser_favorites/:_id', showUserFavorites)

module.exports = router; 