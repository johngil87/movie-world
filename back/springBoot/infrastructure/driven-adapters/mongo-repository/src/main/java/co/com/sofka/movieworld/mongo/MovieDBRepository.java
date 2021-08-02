package co.com.sofka.movieworld.mongo;

import co.com.sofka.movieworld.mongo.entities.Movies;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

import java.util.List;

public interface MovieDBRepository extends MongoRepository<Movies, String> , QueryByExampleExecutor<Movies> {
    List<Movies> findByRateGreaterThanOrderByRateDesc(Double rate);
}
