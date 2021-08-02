const RepositoryCharacterDb = require('../repositories/repositoryCharacterDb')
const getCharacterUseCase = require('../../application/usecases/getCharacterUseCase')

const repositoryCharacterDb = new RepositoryCharacterDb()
module.exports = function findCharacter(){
    return async (req,res) => {
        try{
            const characterData = req.params._id

            let result = await getCharacterUseCase(repositoryCharacterDb, characterData)
            if(!result){
                res.status(400).json({
                    error: "El ID del actor ingresado no existe"
                })
            }
            res.send(result.name)
        }catch(error){
            res.send(error)
        }
    }
}