module.exports = async function getCharacter(repositoryCharacterDb, _id){
    let result = await repositoryCharacterDb.getCharacterById(_id)
    return result
}