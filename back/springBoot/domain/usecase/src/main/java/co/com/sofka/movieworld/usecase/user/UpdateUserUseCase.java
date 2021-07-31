package co.com.sofka.movieworld.usecase.user;

import co.com.sofka.movieworld.model.user.User;
import co.com.sofka.movieworld.model.user.gateways.UserRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class UpdateUserUseCase {
    private final UserRepository userRepository;

    public User execute(User user){
        User newUser = userRepository.findUserById(user.getId());
        newUser.setImage(user.getImage());
        newUser.setNombre(user.getNombre());
        return userRepository.saveUser(newUser);
    }
}
