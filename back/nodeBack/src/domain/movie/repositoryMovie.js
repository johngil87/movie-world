class RepositoryMovie{

  async getMovieById(_id) {
    throw new Error("metodo no implementado")
  }
  async getMovieByCategory(category) {
    throw new Error("metodo no implementado")
  }
  async getAllMovies() {
    throw new Error("metodo no implementado")
  }
  async getDirectorByMovieId(_id) {
    throw new Error("metodo no implementado")
  }
  async getCharactersByMovieId(_id) {
    throw new Error("metodo no implementado")
  } 
};

module.exports = RepositoryMovie;