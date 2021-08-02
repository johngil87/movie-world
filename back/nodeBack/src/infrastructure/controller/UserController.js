const RepositoryUserDb = require('../repositories/repositoryUserDb')
const getUserByIdUseCase = require('../../application/usecases/user/getUseByIdUseCase')
const getFavoritesIds = require("../../application/usecases/user/getFavoritesByUserUserCase")
const RepositoryMovieDb = require("../repositories/repositoryMovieDb")


const repositoryUserDb = new RepositoryUserDb();
const repositoryMovieDb = new RepositoryMovieDb();

function findUser(){
    return async (req,res) => {
        try{
            const userData = req.params._id

            let result = await getUserByIdUseCase(repositoryUserDb, userData)
            if(!result){
                res.status(400).json({
                    error: "El ID del usuerio ingresado no existe"
                })
            }
            res.send(result)
        }catch(error){
            res.send(error)
        }
    }
}

function showFavorites(){
  return async (req,res) => {
      try{
          const userData = req.params._id

          let result = await getFavoritesIds(repositoryUserDb, userData)
          res.send(result)
      }catch(error){
          res.send(error)
      }
  }
}
module.exports = {findUser, showFavorites};