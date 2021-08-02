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

class RemoveFavoritesUseCaseTest {

    private RemoveFavoritesUseCase useCase;
    private UserRepository repository;

    @BeforeEach
    public void setUp() {
        repository = mock(UserRepository.class);
        useCase = new RemoveFavoritesUseCase(repository);
    }

    @Test
    @DisplayName("testt para remover un elemento de lista de favoritos")
    public void removeMovieTest() {
        Set<String> listFavorites = new HashSet<>();
        listFavorites.add("456");
        listFavorites.add("123");
        listFavorites.add("789");
        Set<String> listRemove = new HashSet<>();
        listRemove.add("123");
        listRemove.add("789");
        User user = new User(new Name("paola"), new Email("paola@gmail.com"), new UrlResource("imagen"),listFavorites, new HashSet<>());
        User user2 = new User(new Name("paola"), new Email("paola@gmail.com"), new UrlResource("imagen"),listRemove, new HashSet<>());

        when(repository.findUserById("1")).thenReturn(user);
        when(repository.changeFavorites(any())).thenReturn(user2);
        User response = useCase.execute("1", "456");

        Assertions.assertEquals(2, response.getIdFavorites().size());

    }


    @Test
    @DisplayName("testt que falla para remover un elemento de lista de favoritos")
    public void removeMovieSadTest() {
        Set<String> listFavorites = new HashSet<>();
        listFavorites.add("456");
        listFavorites.add("123");
        listFavorites.add("789");
        Set<String> listRemove = new HashSet<>();
        listRemove.add("123");
        listRemove.add("789");
        User user = new User(new Name("paola"), new Email("paola@gmail.com"), new UrlResource("imagen"),listFavorites, new HashSet<>());
        User user2 = new User(new Name("paola"), new Email("paola@gmail.com"), new UrlResource("imagen"),listRemove, new HashSet<>());

        when(repository.findUserById("1")).thenThrow(new IllegalArgumentException("no existe usuario"));
        Exception exception = null;
        try {
            User response = useCase.execute("1", "456");
        }catch (Exception ex){
            exception = ex;
        }
        Assertions.assertEquals("no existe usuario", exception.getMessage());

    }
}