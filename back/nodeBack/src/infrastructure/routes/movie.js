const express = require('express');
const router = express.Router();

const {findMovie, findMovieDirector} = require('../controller/MovieController')

const getId = findMovie();
const getDirector = findMovieDirector();

router.get('/getmovie/:_id', getId)
router.get('/getmoviedirector/:_id', getDirector)

module.exports = router;