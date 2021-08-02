package co.com.sofka.movieworld.usecase.user;


import co.com.sofka.movieworld.model.user.User;
import co.com.sofka.movieworld.model.user.gateways.UserRepository;
import lombok.RequiredArgsConstructor;

import java.util.HashSet;

@RequiredArgsConstructor
public class AddFavoritesUseCase {

    private final UserRepository repository;

    public User execute(String idUser, String idMovie){
        User user = repository.findUserById(idUser);
        if(user.getIdFavorites() == null){
            user.setIdFavorites(new HashSet<>());
        }
        user.addFavorites(idMovie);
        return repository.changeFavorites(user);
    }
}
