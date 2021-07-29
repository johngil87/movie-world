const RepositoryMovie = require("../../domain/movie/repositoryMovie");
const Movie = require("../database/models/MovieSchema");

class RepositoryMovieDb extends RepositoryMovie{
    constructor(){
      super()
    }
    async getMovieById(_id) {
    let movieResult = await Movie.findById(_id);
    return movieResult
    }
    async getAllMovies() {
      let movieResult = await Movie.find();
      return movieResult
    }
};

module.exports = RepositoryMovieDb;