module.exports = async function getMovie(repositoryMovieDb, title){
  let result = await repositoryMovieDb.getMovieByTitle(title)
  return result
}