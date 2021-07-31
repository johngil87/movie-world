package co.com.sofka.movieworld.mongo;

import co.com.sofka.movieworld.mongo.entities.Users;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

public interface UserDBRepository extends MongoRepository<Users, String>, QueryByExampleExecutor<Users> {
    Users findUserEntityByCorreo(String correo);
}
