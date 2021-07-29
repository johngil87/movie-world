module.exports = function makeMovie ({
  title,
  plot,
  poster_path,
  backdrop_path,
  category,
  director,
  characters
} = {}) {
  if (!title) {
    throw new Error('El director debe tener nombre.')
  }

  return Object.freeze({
    title,
    plot,
    poster_path,
    backdrop_path,
    category,
    director,
    characters
  })


}