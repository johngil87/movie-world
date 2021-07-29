package co.com.sofka.movieworld.model.movie.gateways;

import co.com.sofka.movieworld.model.movie.Movie;

import java.util.List;

public interface MovieRepository {

    List<Movie> findAllMovie();

    List<Movie> findAllMovieTop();

    Movie findMovieById(String id);

    Movie saveMovie(Movie movie);

}
