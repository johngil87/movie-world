const RepositoryUserDb = require('../repositories/repositoryUserDb')
const getUserByIdUseCase = require('../../application/usecases/user/getUserByIdUseCase')

const repositoryUserDb = new RepositoryUserDb()

module.exports = function findUser(){
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