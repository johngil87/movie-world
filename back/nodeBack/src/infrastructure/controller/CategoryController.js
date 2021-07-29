const RepositoryCategoryDb = require('../repositories/repositoryCategoryDb')
const getAllCategoriesUseCase = require('../../application/usecases/getAllCategoriesUseCase')

const repositoryCategoryDb = new RepositoryCategoryDb();
module.exports = function getCategories(){
    return async (req,res) => {
        try{
          let result = await getAllCategoriesUseCase(repositoryCategoryDb)
           res.send(result)
        }catch(error){
          res.send(error)
        }
    }
}