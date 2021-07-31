package co.com.sofka.movieworld.usecase.movie;

import co.com.sofka.movieworld.model.movie.Category;
import co.com.sofka.movieworld.model.movie.Character;
import co.com.sofka.movieworld.model.movie.Director;
import co.com.sofka.movieworld.model.movie.Movie;
import co.com.sofka.movieworld.model.movie.gateways.MovieRepository;
import co.com.sofka.movieworld.model.movie.values.Name;
import co.com.sofka.movieworld.model.movie.values.Score;
import co.com.sofka.movieworld.model.user.gateways.RateRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class CreateMovieUseCaseTest {


    private MovieRepository repository;
    private RateRepository rateRepository;
    private CreateMovieUseCase useCase;

    @BeforeEach
    public void setup(){
        repository = mock(MovieRepository.class);
        rateRepository = mock(RateRepository.class);
        useCase = new CreateMovieUseCase(repository, rateRepository);
    }


    @Test
    void createMovieTest(){



    }
}