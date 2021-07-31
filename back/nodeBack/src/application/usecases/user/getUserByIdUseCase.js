const user = require('../../usecases/user/getFavoritesByUserUseCase')

module.exports = async function getUser(repositoryUserDb, _id){
    let result = await repositoryUserDb.getUserById(_id)
    return result
}