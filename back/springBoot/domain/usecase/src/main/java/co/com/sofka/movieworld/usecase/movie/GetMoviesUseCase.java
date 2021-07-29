package co.com.sofka.movieworld.usecase.movie;

import co.com.sofka.movieworld.model.movie.Movie;
import co.com.sofka.movieworld.model.movie.gateways.MovieRepository;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
public class GetMoviesUseCase {

    private final MovieRepository repository;

    public List<Movie> execute(){
        return repository.findAllMovie();
    }
}
