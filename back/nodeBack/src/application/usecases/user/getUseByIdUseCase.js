const user = require('../../../domain/user/User')

module.exports = async function getUser(repositoryUserDb, _id){
    let favorites = await repositoryUserDb.getUserById(_id)
    return favorites
}