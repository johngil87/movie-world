package co.com.sofka.movieworld.usecase.user;

import co.com.sofka.movieworld.model.user.User;
import co.com.sofka.movieworld.model.user.gateways.UserRepository;
import lombok.RequiredArgsConstructor;
@RequiredArgsConstructor
public class CreateUserUseCase {

    private final UserRepository repository;

    public User execute(User user){
        return repository.loginUser(user);
    }
}
