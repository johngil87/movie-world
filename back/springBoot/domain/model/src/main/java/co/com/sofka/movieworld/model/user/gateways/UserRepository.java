package co.com.sofka.movieworld.model.user.gateways;

import co.com.sofka.movieworld.model.user.User;

public interface UserRepository {

    User loginUser(User user);

    User findUserById(String id);

    User saveUser(User user);

    User changeFavorites(User user);
}
