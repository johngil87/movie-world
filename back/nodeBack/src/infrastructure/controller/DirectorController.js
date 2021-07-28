const RepositoryDirectorDb = require('../repositories/repositoryDirectorDb')
const getDirectorUseCase = require('../../application/usecases/getDirectorUseCase')

const repositoryDirectorDb = new RepositoryDirectorDb()

module.exports = function findDirector(){
    return async (req,res) => {
        try{
            const directorData = req.params._id

            let result = await getDirectorUseCase(repositoryDirectorDb, directorData)
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