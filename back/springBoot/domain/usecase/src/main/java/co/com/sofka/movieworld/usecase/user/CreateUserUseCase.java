package co.com.sofka.movieworld.usecase.user;

import co.com.sofka.movieworld.model.user.User;
import co.com.sofka.movieworld.model.user.gateways.UserRepository;
import lombok.RequiredArgsConstructor;
@RequiredArgsConstructor
public class CreateUserUseCase {

    private final UserRepository repository;

    public User execute(User user){
        if(user.getNombre().getValue().isEmpty()){
            throw new IllegalArgumentException("el nombre del usuario no puede estar vacio");
        }
        return repository.loginUser(user);
    }
}
