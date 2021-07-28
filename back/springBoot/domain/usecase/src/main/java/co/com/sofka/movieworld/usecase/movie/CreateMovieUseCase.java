package co.com.sofka.movieworld.usecase.movie;

import co.com.sofka.movieworld.model.movie.Movie;
import co.com.sofka.movieworld.model.movie.gateways.MovieRepository;
import lombok.RequiredArgsConstructor;
@RequiredArgsConstructor
public class CreateMovieUseCase {

    private final MovieRepository repository;

    public Movie execute(Movie movie){
        return repository.save(movie);
    }
}
