package co.com.sofka.movieworld.mongo;

import co.com.sofka.movieworld.mongo.entities.RateEntity;
import co.com.sofka.movieworld.mongo.entities.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

public interface RateDBRepository extends MongoRepository<RateEntity, String>, QueryByExampleExecutor<RateEntity> {
    RateEntity findByIdMovie(String id);
}
