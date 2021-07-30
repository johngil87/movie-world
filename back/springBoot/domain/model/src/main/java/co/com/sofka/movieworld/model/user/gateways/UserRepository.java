package co.com.sofka.movieworld.model.user.gateways;

import co.com.sofka.movieworld.model.user.User;

import java.util.List;
import java.util.Set;

public interface UserRepository {

    User loginUser(User user);

    User findUserById(String id);

    User saveUser(User user);

    User changeFavorites(User user);

    Set<String> listVotes(String idUser);
}
