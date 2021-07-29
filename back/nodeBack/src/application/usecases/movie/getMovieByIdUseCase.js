module.exports = async function getMovie(repositoryMovieDb, _id){
  let result = await repositoryMovieDb.getMovieById(_id)
  return result
}