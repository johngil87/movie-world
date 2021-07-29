const RepositoryCategory = require("../../domain/movie/category/repositoryCategory")
const Category = require("../database/models/CategorySchema");

class repositoryCategoryDb extends RepositoryCategory{
  constructor(){
    super()
  }

  async listAllCategories() {
    let categoryResult = await Category.find();
    return categoryResult
  }
};

module.exports = repositoryCategoryDb;