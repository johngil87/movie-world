export const transformMovieListFromBack = (movieListfromBack) =>{
    const movies = movieListfromBack.map(function(movie){
        let currentMovie = {
            id: movie.id,
            title: movie.title, 
            rate: movie.rate,
            director:movie.movieDirector.nombre,
            actors: movie.characters.map(i => i.nombre.value),
            categories: movie.categories.map(i => i.nombre.value),
            trailer: movie.urlTrailer.value, 
            image: movie.urlImage.value,
            plot:movie.plot.value
        };
        return currentMovie;
    });
    return movies;
}

