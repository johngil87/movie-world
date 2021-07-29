module.exports = async function getMovie(repositoryMovieDb){
  let result = await repositoryMovieDb.getAllMovies()
  return result
}