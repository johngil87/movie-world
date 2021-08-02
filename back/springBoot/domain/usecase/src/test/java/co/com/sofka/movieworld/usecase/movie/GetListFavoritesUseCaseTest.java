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
import co.com.sofka.movieworld.model.user.User;
import co.com.sofka.movieworld.model.user.UserRate;
import co.com.sofka.movieworld.model.user.gateways.UserRepository;
import co.com.sofka.movieworld.model.user.values.Email;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class GetListFavoritesUseCaseTest {

    private MovieRepository repository;
    private UserRepository userRepository;
    private GetListFavoritesUseCase useCase;

    @BeforeEach
    public void setUp(){
        repository = mock(MovieRepository.class);
        userRepository = mock(UserRepository.class);
        useCase = new GetListFavoritesUseCase(repository,userRepository);
    }

    @Test
    public void getListHappyTest(){

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
        Set<String> list = new HashSet<>();
        list.add("1");
        Set<UserRate> rate= new HashSet<>();
        UserRate usrRate= new UserRate("1","2", new Score(3.5));
        rate.add(usrRate);
        Movie movie = new Movie("1",director, category,character,titleMovie,puntaje,urlResource, urlResource, plotMovie);
        User user = new User(new Name("jose"), new Email("jose@gmail.com"), new UrlResource("url"),list, rate);

        when(repository.saveMovie(any())).thenReturn(movie);
        when(userRepository.findUserById("1")).thenReturn(user);
        List<Movie> result = useCase.execute("1");

        Assertions.assertEquals(1, result.size());
    }

}