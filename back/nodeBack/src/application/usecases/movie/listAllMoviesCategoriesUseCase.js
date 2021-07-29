module.exports = async function getMovie(repositoryMovieDb){
  let result = await repositoryMovieDb.getAllMoviesCategories()
  return result
}