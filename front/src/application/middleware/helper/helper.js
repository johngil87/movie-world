export const transformMovieListFromBack = (movieListfromBack) =>{
    const movies = movieListfromBack.map(function(movie){

        const arrayActors = movie.characters.map(function(actor){
            let currentActor = actor.nombre.value;
            return currentActor;
        });

        const currentMovie = {
            id: movie._id,
            title: movie.title, 
            rate: movie.rate,
            director:movie.movieDirector.nombre,
            actors: arrayActors,
            category: movie.category[0].nombre.value,
            trailer: movie.urlTrailer.value, 
            image: movie.urlImage.value,
            //plot:movie.plot.value
        };
        return currentMovie;
    });
    return movies;
}


export const transformMovieFromBack = (moviefromBack) =>{
 

    const characters = moviefromBack.characters.map(function(actor){
        let currentActor = actor.nombre.value;
        return currentActor;
    });

    const movie = {
        id: moviefromBack._id,
        title: moviefromBack.title, 
        rate: moviefromBack.rate,
        director:moviefromBack.movieDirector.nombre,
        actors: characters,
        category: moviefromBack.category[0].nombre.value,
        trailer: moviefromBack.urlTrailer.value, 
        image: moviefromBack.urlImage.value,
        //plot:moviefromBack.plot.value
    };
    return movie;
}

