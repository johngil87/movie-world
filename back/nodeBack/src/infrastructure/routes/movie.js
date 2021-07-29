const express = require('express');
const router = express.Router();

const {findMovie, findMovieDirector, listAllMovies, findMovieByTitle} = require('../controller/MovieController')

const getId = findMovie();
const getDirector = findMovieDirector();
const getAllMovies = listAllMovies();
const getMovieByTitle = findMovieByTitle()

router.get('/getmovie/:_id', getId)
router.get('/getmoviedirector/:_id', getDirector)
router.get('/getmovies/', getAllMovies)
router.get('/getmovietitle/:name', getMovieByTitle)

module.exports = router;