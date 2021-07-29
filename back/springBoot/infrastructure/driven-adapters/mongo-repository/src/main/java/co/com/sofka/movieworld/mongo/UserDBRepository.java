package co.com.sofka.movieworld.mongo;

import co.com.sofka.movieworld.mongo.entities.MovieEntity;
import co.com.sofka.movieworld.mongo.entities.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

public interface UserDBRepository extends MongoRepository<UserEntity, String>, QueryByExampleExecutor<UserEntity> {
    UserEntity findUserEntityByCorreo(String correo);
}
