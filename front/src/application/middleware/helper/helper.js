export const transformMovieListFromBack = (movieListfromBack) =>{
    const movies = movieListfromBack.map(function(movie){
        let currentMovie = {
            id: movie.id,
            title: movie.title, 
            rate: movie.rate,
            director:movie.movieDirector.nombre,
            actors: movie.characters.map(i => i.nombre.nombre),
            categories: movie.categories.map(i => i.nombre.nombre),
            trailer: movie.urlTrailer.url, 
            image : movie.urlImage.url,
            plot:movie.plot.plot
        };
        return currentMovie;
    });
    return movies;
}