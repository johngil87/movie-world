const RepositoryDirector = require("../../domain/movie/director/repositoryDirector");
const Director = require("../database/models/DirectorSchema");

class RepositoryDirectorDb extends RepositoryDirector{
    constructor(){
      super()
    }
    async getDirectorById(_id) {
    let directorResult = await Director.findById(_id);
    return directorResult
  }
};

module.exports = RepositoryDirectorDb;