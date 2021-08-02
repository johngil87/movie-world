const makeFakeMovie = (info) => {
  const movie = {
    title: info.title,
    director: info.director,
    characters: info.characters,
    rate: info.rate,
    category: info.category,
    urlTrailer: info.urlTrailer,
    urlImage: info.urlImage,
    plot: info.plot
  };
  return movie;
};
module.exports = { makeFakeMovie };