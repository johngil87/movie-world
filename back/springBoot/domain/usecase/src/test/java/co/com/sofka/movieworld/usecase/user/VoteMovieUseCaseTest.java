package co.com.sofka.movieworld.usecase.user;

import co.com.sofka.movieworld.model.movie.Category;
import co.com.sofka.movieworld.model.movie.Character;
import co.com.sofka.movieworld.model.movie.Director;
import co.com.sofka.movieworld.model.movie.Movie;
import co.com.sofka.movieworld.model.movie.gateways.MovieRepository;
import co.com.sofka.movieworld.model.movie.values.Name;
import co.com.sofka.movieworld.model.movie.values.PlotMovie;
import co.com.sofka.movieworld.model.movie.values.Score;
import co.com.sofka.movieworld.model.movie.values.UrlResource;
import co.com.sofka.movieworld.model.user.Rate;
import co.com.sofka.movieworld.model.user.User;
import co.com.sofka.movieworld.model.user.UserRate;
import co.com.sofka.movieworld.model.user.gateways.RateRepository;
import co.com.sofka.movieworld.model.user.gateways.UserRepository;
import co.com.sofka.movieworld.model.user.values.Email;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class VoteMovieUseCaseTest {

    private MovieRepository movieRepository;
    private UserRepository userRepository;
    private RateRepository rateRepository;
    private VoteMovieUseCase voteMovieUseCase;

    @BeforeEach
    public void setUp(){
        movieRepository = mock(MovieRepository.class);
        userRepository = mock(UserRepository.class);
        rateRepository = mock(RateRepository.class);
        voteMovieUseCase = new VoteMovieUseCase(userRepository,rateRepository , movieRepository);
    }

    @Test
    @DisplayName("test para votar por pelicula")
    public void voteMovieTest(){
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
        Set<UserRate> userRates = new HashSet<>();
        userRates.add(new UserRate("123", "456", new Score(3.6)));
        Set<String> listFavorites = new HashSet<>();
        listFavorites.add("456");
        List<Double> puntajes= new ArrayList<>();
        puntajes.add(4.5);
        puntajes.add(4.0);
        Rate rate = new Rate("456", "123",puntajes, 85.0);
        User user = new User(new Name("456"), new Email("paola@gmail.com"), new UrlResource("imagen"), listFavorites, new HashSet<>());
        Movie movie = new Movie("123",director, category,character,titleMovie,puntaje,urlResource, urlResource, plotMovie);

        when(userRepository.findUserById(any())).thenReturn(user);
        //when()

    }

}