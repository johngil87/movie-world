const category = require('../../domain/movie/category/Category')

module.exports = async function getAllCategories(repositoryCategoryDb){

    let result = await repositoryCategoryDb.listAllCategories()
    return result
}