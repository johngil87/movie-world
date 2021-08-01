package co.com.sofka.movieworld.usecase.movie;

import co.com.sofka.movieworld.model.movie.Category;
import co.com.sofka.movieworld.model.movie.Character;
import co.com.sofka.movieworld.model.movie.Director;
import co.com.sofka.movieworld.model.movie.Movie;
import co.com.sofka.movieworld.model.movie.gateways.MovieRepository;
import co.com.sofka.movieworld.model.movie.values.Name;
import co.com.sofka.movieworld.model.movie.values.PlotMovie;
import co.com.sofka.movieworld.model.movie.values.Score;
import co.com.sofka.movieworld.model.movie.values.UrlResource;
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

        Director director = new Director("pedro");
        Set<Category> category = new HashSet<>();
        category.add(new Category( new Name("drama")));
        Set<Character> character = new HashSet<>();
        Character character1 = new Character(new Name("manuel"));
        Character character2 = new Character( new Name("manuel"));
        character.add(character1);
        character.add(character2);
        Name titleMovie = new Name("el capo");
        Score puntaje = new Score(5.0);
        PlotMovie plotMovie = new PlotMovie("resumen de la pelicula");
        UrlResource urlResource = new UrlResource("Url");


        Movie movie = new Movie("123",director, category,character,titleMovie,puntaje,urlResource, urlResource, plotMovie);

        when(repository.saveMovie(any())).thenReturn(movie);
        Movie result = useCase.execute(movie);

        Assertions.assertEquals("el capo", result.getTitleMovie().getValue());

    }

    @Test
    void createMovieSadTest(){

        Director director = new Director("pedro");
        Set<Category> category = new HashSet<>();
        category.add(new Category( new Name("drama")));
        Set<Character> character = new HashSet<>();
        Character character1 = new Character(new Name("manuel"));
        Character character2 = new Character( new Name("manuel"));
        character.add(character1);
        character.add(character2);
        Name titleMovie = new Name("");
        Score puntaje = new Score(5.0);
        PlotMovie plotMovie = new PlotMovie("resumen de la pelicula");
        UrlResource urlResource = new UrlResource("Url");


        Movie movie = new Movie("123",director, category,character,titleMovie,puntaje,urlResource, urlResource, plotMovie);

        when(repository.saveMovie(any())).thenReturn(movie);
        Exception exception= null;
        try{
            Movie result = useCase.execute(movie);
        }catch (Exception ex){
            exception= ex;
        }
        Assertions.assertEquals("el nombre de la pelicula es obligatorio", exception.getMessage());

    }

}