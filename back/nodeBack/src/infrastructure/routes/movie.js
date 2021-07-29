const express = require('express');
const router = express.Router();

const {findMovie, findMovieDirector, listAllMovies} = require('../controller/MovieController')

const getId = findMovie();
const getDirector = findMovieDirector();
const getAllMovies = listAllMovies();

router.get('/getmovie/:_id', getId)
router.get('/getmoviedirector/:_id', getDirector)
router.get('/getmovies/', getAllMovies)

module.exports = router;