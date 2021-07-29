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
    async getMovieByTitle(name) {

      let movie = await Movie.find();
      let result = movie.filter(currentMovie => {
      
        let currentTitle = currentMovie.title.toLowerCase();
        let actualword = name.toLowerCase();
        if(currentTitle.includes(actualword)){
          return currentMovie
        }
      })
      if(result.length === 0){
        return `No se encuentra la pelicula ${name}, intente ingresando otro titulo`
      } 
      return result
    }
};

module.exports = RepositoryMovieDb;