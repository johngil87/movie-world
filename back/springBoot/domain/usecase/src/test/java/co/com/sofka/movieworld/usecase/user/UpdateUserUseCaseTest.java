package co.com.sofka.movieworld.usecase.user;

import co.com.sofka.movieworld.model.movie.values.Name;
import co.com.sofka.movieworld.model.movie.values.UrlResource;
import co.com.sofka.movieworld.model.user.User;
import co.com.sofka.movieworld.model.user.gateways.UserRepository;
import co.com.sofka.movieworld.model.user.values.Email;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.Set;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class UpdateUserUseCaseTest {

    private UserRepository repository;
    private UpdateUserUseCase useCase;

    @BeforeEach
    public void setUp() {
        repository = mock(UserRepository.class);
        useCase = new UpdateUserUseCase(repository);
    }

    @Test
    @DisplayName("test para actualizar datos de ususario")
    public void updateUserTest() {

        Set<String> listFavorites = new HashSet<>();
        listFavorites.add("456");
        User user = new User("123", new Name("paola"), new Email("paola@gmail.com"), new UrlResource("imagen"), listFavorites, new HashSet<>());
        User userUpdate = new User("123", new Name("modificado"), new Email("Modificado@gmail.com"), new UrlResource("imagen"), listFavorites, new HashSet<>());

        when(repository.findUserById("123")).thenReturn(user);
        when(repository.saveUser(any())).thenReturn(userUpdate);

        User response = useCase.execute(userUpdate);

        Assertions.assertEquals("modificado", response.getNombre().getValue());
    }

    @Test
    @DisplayName("test de fallo para actualizar datos de ususario")
    public void updateUserSadTest() {

        Set<String> listFavorites = new HashSet<>();
        listFavorites.add("456");
        User user = new User("123", new Name(""), new Email("paola@gmail.com"), new UrlResource("imagen"), listFavorites, new HashSet<>());
        User userUpdate = new User("123", new Name(""), new Email("Modificado@gmail.com"), new UrlResource("imagen"), listFavorites, new HashSet<>());

        when(repository.findUserById("")).thenReturn(user);
        when(repository.saveUser(any())).thenReturn(userUpdate);
        Exception exception = null;
        try {
            User response = useCase.execute(userUpdate);
        } catch (Exception ex) {
            exception = ex;
        }
        Assertions.assertEquals("para actualizar el usuario es obligatorio el nombre",exception.getMessage());
    }
}