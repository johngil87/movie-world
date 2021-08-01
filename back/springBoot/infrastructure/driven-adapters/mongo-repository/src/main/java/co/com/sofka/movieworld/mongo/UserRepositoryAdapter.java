package co.com.sofka.movieworld.mongo;

import co.com.sofka.movieworld.model.user.User;
import co.com.sofka.movieworld.model.user.UserRate;
import co.com.sofka.movieworld.model.user.gateways.UserRepository;
import co.com.sofka.movieworld.model.user.values.Email;
import co.com.sofka.movieworld.mongo.entities.Users;
import co.com.sofka.movieworld.mongo.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Repository
public class UserRepositoryAdapter extends AdapterOperations<Users, Users, String, UserDBRepository>
        implements UserRepository {
    public UserRepositoryAdapter(UserDBRepository repository, ObjectMapper mapper) {
        /**
         *  Could be use mapper.mapBuilder if your domain model implement builder pattern
         *  super(repository, mapper, d -> mapper.mapBuilder(d,ObjectModel.ObjectModelBuilder.class).build());
         *  Or using mapper.map with the class of the object model
         */
        super(repository, mapper, d -> mapper.map(d, Users.class));
    }

    @Override
    public User loginUser(User user) {
        Users entity = this.repository.findUserEntityByCorreo(user.getCorreo().getValue());
        if(entity == null){
            Users users = new Users( user.getNombre(), user.getCorreo().getValue(), user.getImage(), user.getIdFavorites(), user.getRate());
            Users newEntity = this.repository.save(users);
            user.setId(newEntity.getId());
            return user;
        }
        user.setId(entity.getId());
        user.setIdFavorites(entity.getIdFavorites());
        user.setRate(entity.getRate());
        user.setNombre(entity.getNombre());
        user.setImage(entity.getImage());
        return user;
    }

    @Override
    public User findUserById(String id) {
        Optional<Users> userEntity = this.repository.findById(id);
        if(!userEntity.isPresent()){
            throw new IllegalArgumentException("usuario no existe ne la base de datos");
        }
        return new User(userEntity.get().getId(),userEntity.get().getNombre(), new Email(userEntity.get().getCorreo()),userEntity.get().getImage(), userEntity.get().getIdFavorites(), userEntity.get().getRate());
    }

    @Override
    public User saveUser(User user) {
        Users users = this.repository.save(new Users(user.getId(), user.getNombre(), user.getCorreo().getValue(), user.getImage(), user.getIdFavorites(), user.getRate()));
        user.setId(users.getId());
        return user;
    }

    @Override
    public User changeFavorites(User user) {
        Users entity = new Users(user.getId(), user.getNombre(), user.getCorreo().getValue(), user.getImage(), user.getIdFavorites(), user.getRate());
        user.setId(this.repository.save(entity).getId());
        return user;
    }

    @Override
    public Set<String> listVotes(String idUser) {
        Optional<Users> user=this.repository.findById(idUser);
        if(user.isPresent() && user.get().getRate() != null){
            return user.get().getRate().stream().map(UserRate::getIdMovie).collect(Collectors.toSet());
        }
        return  new HashSet<>();
    }

}
