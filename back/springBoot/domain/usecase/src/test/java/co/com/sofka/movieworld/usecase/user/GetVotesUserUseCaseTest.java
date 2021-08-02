package co.com.sofka.movieworld.usecase.user;

import co.com.sofka.movieworld.model.user.gateways.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class GetVotesUserUseCaseTest {

    private UserRepository userRepository;
    private GetVotesUserUseCase useCase;

    @BeforeEach
    public void setUp(){
        userRepository = mock(UserRepository.class);
        useCase = new GetVotesUserUseCase(userRepository);
    }

    @Test
    @DisplayName("test para listar votos del usuario")
    public void getVotesUserTest(){
        Set<String> listId = new HashSet<>();
        listId.add("123");
        listId.add("456");
        listId.add("789");

        when(userRepository.listVotes("1")).thenReturn(listId);

        Set<String> response = useCase.execute("1");

        Assertions.assertEquals(3, response.size());

    }

}