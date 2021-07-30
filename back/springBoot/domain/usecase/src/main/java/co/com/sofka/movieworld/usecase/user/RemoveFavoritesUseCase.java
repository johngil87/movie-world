package co.com.sofka.movieworld.usecase.user;

import co.com.sofka.movieworld.model.user.User;
import co.com.sofka.movieworld.model.user.gateways.UserRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class RemoveFavoritesUseCase {
    private final UserRepository repository;

    public User execute(String idUser, String idMovie){
        User user = repository.findUserById(idUser);
        if(user == null){
            throw new IllegalArgumentException("no existe usuario");
        }
        user.removeFavorites(idMovie);
        return repository.changeFavorites(user);
    }
}
