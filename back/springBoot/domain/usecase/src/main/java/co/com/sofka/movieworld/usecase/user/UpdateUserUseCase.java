package co.com.sofka.movieworld.usecase.user;

import co.com.sofka.movieworld.model.user.User;
import co.com.sofka.movieworld.model.user.gateways.UserRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class UpdateUserUseCase {
    private final UserRepository userRepository;

    public User execute(User user){
        if(user.getNombre().getValue().isEmpty()){
            throw  new IllegalArgumentException("para actualizar el usuario es obligatorio el nombre");
        }
        User newUser = userRepository.findUserById(user.getId());
        newUser.setImage(user.getImage());
        newUser.setNombre(user.getNombre());
        return userRepository.saveUser(newUser);
    }
}
