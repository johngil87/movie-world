const user = require('../../domain/user/User')

module.exports = async function getUser(repositoryUserDb, _id){
    let result = await repositoryUserDb.getUserById(_id)
    return result
}