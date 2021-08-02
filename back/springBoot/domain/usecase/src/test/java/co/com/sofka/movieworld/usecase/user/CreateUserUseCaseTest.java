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

class CreateUserUseCaseTest {

    private UserRepository repository;
    private CreateUserUseCase useCase;

    @BeforeEach
    public void setUp(){
        repository = mock(UserRepository.class);
        useCase = new CreateUserUseCase(repository);
    }

    @Test
    @DisplayName("test para crear y consultar usuario")
    public void createUserHappyTest(){
        Set<UserRate> userRates = new HashSet<>();
        userRates.add(new UserRate("123", "456", new Score(3.6)));
        Set<String> listFavorites = new HashSet<>();
        listFavorites.add("456");
        User user = new User(new Name("paola"), new Email("paola@gmail.com"), new UrlResource("imagen"), listFavorites, new HashSet<>());

        when(repository.loginUser(any())).thenReturn(user);
        User response= useCase.execute(user);
        Assertions.assertEquals("paola", response.getNombre().getValue());
    }

    @Test
    @DisplayName("test de fallo para crear usuario")
    public void createUserSadTest(){
        Set<UserRate> userRates = new HashSet<>();
        userRates.add(new UserRate("123", "456", new Score(3.6)));
        Set<String> listFavorites = new HashSet<>();
        listFavorites.add("456");
        User user = new User(new Name(""), new Email("paola@gmail.com"), new UrlResource("imagen"), listFavorites, new HashSet<>());

        when(repository.loginUser(any())).thenReturn(user);
        Exception exception= null;
        try {
            User response= useCase.execute(user);
        }catch (Exception ex){
            exception = ex;
        }
        Assertions.assertEquals("el nombre del usuario no puede estar vacio", exception.getMessage());
    }

}