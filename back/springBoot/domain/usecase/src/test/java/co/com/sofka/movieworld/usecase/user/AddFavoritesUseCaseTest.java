package co.com.sofka.movieworld.usecase.user;

import co.com.sofka.movieworld.model.movie.values.Name;
import co.com.sofka.movieworld.model.movie.values.Score;
import co.com.sofka.movieworld.model.movie.values.UrlResource;
import co.com.sofka.movieworld.model.user.User;
import co.com.sofka.movieworld.model.user.UserRate;
import co.com.sofka.movieworld.model.user.gateways.UserRepository;
import co.com.sofka.movieworld.model.user.values.Email;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class AddFavoritesUseCaseTest {


    private UserRepository repository;
    private AddFavoritesUseCase useCase;

    @BeforeEach
    public void setUp(){
        repository = mock(UserRepository.class);
        useCase = new AddFavoritesUseCase(repository);
    }


    @Test
    @DisplayName("test para añadir favoritos al usuario")
    public void addFavoritesHappyTest(){
        Set<UserRate> userRates = new HashSet<>();
        userRates.add(new UserRate("123", "456", new Score(3.6)));
        Set<String> listFavorites = new HashSet<>();
        listFavorites.add("456");
        User user = new User(new Name("paola"), new Email("paola@gmail.com"), new UrlResource("imagen"),new HashSet<>(), new HashSet<>());
        User user2 = new User(new Name("paola"), new Email("paola@gmail.com"), new UrlResource("imagen"),listFavorites, new HashSet<>());

        when(repository.findUserById("123")).thenReturn(user);
        when(repository.changeFavorites(any())).thenReturn(user2);
        User user3 = useCase.execute("123", "456");

        Assertions.assertEquals(1, user3.getIdFavorites().size());
        Assertions.assertEquals("paola", user3.getNombre().getValue());
    }

    @Test
    @DisplayName("test de fallo al añadir favoritos al usuaio")
    public void addFavoritesSadTest(){
        Set<UserRate> userRates = new HashSet<>();
        userRates.add(new UserRate("123", "456", new Score(3.6)));
        Set<String> listFavorites = new HashSet<>();
        listFavorites.add("456");
        User user = new User(new Name("paola"), new Email("paola@gmail.com"), new UrlResource("imagen"),new HashSet<>(), new HashSet<>());

        when(repository.findUserById("123")).thenReturn(user);
        when(repository.changeFavorites(any())).thenReturn(user);
        User response = useCase.execute("123", "456");

        Assertions.assertEquals(true, response.getRate().isEmpty());
    }
}