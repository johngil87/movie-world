package co.com.sofka.movieworld.usecase.movie;


import co.com.sofka.movieworld.model.movie.Movie;
import co.com.sofka.movieworld.model.movie.gateways.MovieRepository;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
public class GetMovieByCategoryUseCase {

    private MovieRepository repository;

    public List<Movie> execute(String category){
        return repository.findAllByCategory(category);
    }

}
