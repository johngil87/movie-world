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
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class GetTopMoviesUseCaseTest {

    private MovieRepository repository;
    private GetTopMoviesUseCase useCase;

    @BeforeEach
    public void setUp(){
       repository = mock(MovieRepository.class);
       useCase = new GetTopMoviesUseCase(repository);
    }

    @Test
    public void topList(){
        Director director = new Director("pedro");
        Set<Category> category = new HashSet<>();
        category.add(new Category( new Name("Drama")));
        Set<Character> character = new HashSet<>();
        Character character1 = new Character(new Name("manuel"));
        Character character2 = new Character( new Name("manuel"));
        character.add(character1);
        character.add(character2);
        Name titleMovie = new Name("el capo");
        Score puntaje = new Score(5.0);
        PlotMovie plotMovie = new PlotMovie("resumen de la pelicula");
        UrlResource urlResource = new UrlResource("Url");

        Director director2 = new Director("pedro");
        Set<Category> category2 = new HashSet<>();
        category.add(new Category( new Name("Drama")));
        Set<Character> character3 = new HashSet<>();
        Character character4 = new Character(new Name("manuel"));
        Character character5 = new Character( new Name("manuel"));
        character.add(character4);
        character.add(character5);
        Name titleMovie2 = new Name("el capo");
        Score puntaje2 = new Score(5.0);
        PlotMovie plotMovie2 = new PlotMovie("resumen de la pelicula");
        UrlResource urlResource2= new UrlResource("Url");
        List<Movie> movies = new ArrayList<>();
        Movie movie = new Movie("123",director, category,character,titleMovie,puntaje,urlResource, urlResource, plotMovie);
        Movie movie2 = new Movie("123",director2, category2,character3,titleMovie2,puntaje2,urlResource2, urlResource2, plotMovie2);
        movies.add(movie);
        movies.add(movie2);

        when(repository.findAllMovieTop()).thenReturn(movies);

        List<Movie> result = useCase.execute();

        Assertions.assertEquals(2, result.size());
    }
}