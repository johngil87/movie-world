package co.com.sofka.movieworld.usecase.movie;

import co.com.sofka.movieworld.model.movie.Movie;
import co.com.sofka.movieworld.model.movie.gateways.MovieRepository;
import co.com.sofka.movieworld.model.user.Rate;
import co.com.sofka.movieworld.model.user.gateways.RateRepository;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
public class CreateMovieUseCase {

    private final MovieRepository repository;
    private final RateRepository rateRepository;

    public Movie execute(Movie movie){
        if(movie.getTitleMovie().getValue().isEmpty()){
            throw new IllegalArgumentException("el nombre de la pelicula es obligatorio");
        }

        Movie newMovie = repository.saveMovie(movie);
        Rate rate = new Rate(newMovie.getId(), new ArrayList<>() , 0.0);
        rateRepository.setRate(rate);
        return newMovie;
    }
}
