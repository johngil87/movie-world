package co.com.sofka.movieworld.mongo;

import co.com.sofka.movieworld.model.user.User;
import co.com.sofka.movieworld.model.user.gateways.UserRepository;
import co.com.sofka.movieworld.model.user.values.Email;
import co.com.sofka.movieworld.mongo.entities.MovieEntity;
import co.com.sofka.movieworld.mongo.entities.UserEntity;
import co.com.sofka.movieworld.mongo.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.function.Function;

@Repository
public class UserRepositoryAdapter extends AdapterOperations<UserEntity, UserEntity, String, UserDBRepository>
        implements UserRepository {
    public UserRepositoryAdapter(UserDBRepository repository, ObjectMapper mapper) {
        /**
         *  Could be use mapper.mapBuilder if your domain model implement builder pattern
         *  super(repository, mapper, d -> mapper.mapBuilder(d,ObjectModel.ObjectModelBuilder.class).build());
         *  Or using mapper.map with the class of the object model
         */
        super(repository, mapper, d -> mapper.map(d, UserEntity.class));
    }

    @Override
    public User loginUser(User user) {
        UserEntity entity = this.repository.findUserEntityByCorreo(user.getCorreo().getValue());
        if(entity == null){
            UserEntity userEntity = new UserEntity( user.getNombre(), user.getCorreo().getValue(), user.getImage(), user.getIdFavorites(), user.getRate());
            UserEntity newEntity = this.repository.save(userEntity);
            user.setId(newEntity.getId());
            return user;
        }
        user.setId(entity.getId());
        user.setIdFavorites(entity.getIdFavorites());
        user.rateMovie(entity.getRate());
        return user;
    }

    @Override
    public User findUserById(String id) {
        Optional<UserEntity> userEntity = repository.findById(id);
        if(!userEntity.isPresent()){
            throw new IllegalArgumentException("usuario no existe ne la base de datos");
        }
        return new User(userEntity.get().getId(),userEntity.get().getNombre(), new Email(userEntity.get().getCorreo()),userEntity.get().getImage(), userEntity.get().getIdFavorites(), userEntity.get().getRate());
    }

    @Override
    public User saveUser(User user) {
        return null;
    }

    @Override
    public User addFavorites(User user) {
        UserEntity entity = new UserEntity(user.getId(), user.getNombre(), user.getCorreo().getValue(), user.getImage(), user.getIdFavorites(), user.getRate());
        user.setId(this.repository.save(entity).getId());
        return user;
    }
}
