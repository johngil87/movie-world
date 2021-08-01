const user = require('../../../domain/user/User')

let getFavoritesIds = async (repositoryUserDb, _id) => {
    let result = await repositoryUserDb.getFavoritesByUser(_id)
    return result
}

module.exports = getFavoritesIds;