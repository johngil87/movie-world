const director = require('../../domain/movie/director/Director')

module.exports = async function getDirector(repositoryDirectorDb, _id){
    let result = await repositoryDirectorDb.getDirectorById(_id)
    return result
}