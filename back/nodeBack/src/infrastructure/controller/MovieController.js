const RepositoryMovieDb = require('../repositories/repositoryMovieDb')
const RepositoryDirectorDb = require('../repositories/repositoryDirectorDb')
const getMovieByIdUseCase = require('../../application/usecases/movie/getMovieByIdUseCase')
const getDirectorUseCase = require('../../application/usecases/getDirectorUseCase')
const getAllMoviesUseCase = require('../../application/usecases/movie/getAllMoviesUseCase')
const getMovieByTitleUseCase = require('../../application/usecases/movie/getMovieByTitleUseCase')
const listAllMoviesCategoriesUseCase = require('../../application/usecases/movie/listAllMoviesCategoriesUseCase')

const repositoryMovieDb = new RepositoryMovieDb()
const repositoryDirectorDb = new RepositoryDirectorDb()

function findMovie(){
    return async (req,res) => {
        try{
            const movieData = req.params._id

            let result = await getMovieByIdUseCase(repositoryMovieDb, movieData)
            if(!result){
                res.status(400).json({
                    error: "El ID ingresado no existe"
                })
            }
            res.send(result)
        }catch(error){
            res.send(error)
        }
    }
}

function findMovieDirector(){
    return async (req,res) => {
        try{
            const movieId = req.params._id

            let movieResult = await getMovieByIdUseCase(repositoryMovieDb, movieId)
            let result = await getDirectorUseCase(repositoryDirectorDb, movieResult.director[0])
            if(!result){
                res.status(400).json({
                    error: "El ID del director ingresado no existe"
                })
            }
            res.send(result.name)
        }catch(error){
            res.send(error)
        }
    }
}

function listAllMovies(){
    return async (req,res) => {
        try{
          let result = await getAllMoviesUseCase(repositoryMovieDb)
           res.send(result)
        }catch(error){
          res.send(error)
        }
    }
}

function findMovieByTitle(){
    return async (req,res) => {
        try{
            const movieData = req.params.name
            let result = await getMovieByTitleUseCase(repositoryMovieDb, movieData)
            if(!result){
                res.status(400).json({
                    error: "No hay coincidencia"
                })
            }
            res.send(result)
        }catch(error){
            res.send(error)
        }
    }
}

function listAllMovieCategories(){
    return async (req,res) => {
        try{
          let result = await listAllMoviesCategoriesUseCase(repositoryMovieDb)
           res.send(result)
        }catch(error){
          res.send(error)
        }
    }
}

module.exports = {findMovie, findMovieDirector, listAllMovies, findMovieByTitle, listAllMovieCategories}