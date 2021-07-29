package co.com.sofka.movieworld.mongo;

import co.com.sofka.movieworld.model.user.Rate;
import co.com.sofka.movieworld.model.user.gateways.RateRepository;
import co.com.sofka.movieworld.model.user.gateways.UserRepository;
import co.com.sofka.movieworld.mongo.entities.RateEntity;
import co.com.sofka.movieworld.mongo.entities.UserEntity;
import co.com.sofka.movieworld.mongo.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class RateRepositoryAdapter extends AdapterOperations<RateEntity, RateEntity, String, RateDBRepository>
        implements RateRepository {
    public RateRepositoryAdapter(RateDBRepository repository, ObjectMapper mapper) {
        /**
         *  Could be use mapper.mapBuilder if your domain model implement builder pattern
         *  super(repository, mapper, d -> mapper.mapBuilder(d,ObjectModel.ObjectModelBuilder.class).build());
         *  Or using mapper.map with the class of the object model
         */
        super(repository, mapper, d -> mapper.map(d, RateEntity.class));
    }

    @Override
    public Rate setRate(Rate rate) {
        RateEntity rateEntity = this.repository.save(new RateEntity(rate.getId(), rate.getIdMovie(), rate.getRateUser(), rate.getFinalRate()));
        rate.setId(rateEntity.getId());
        return rate;
    }

    @Override
    public Rate findRateByMovie(String id) {
        RateEntity rateEntity = repository.findByIdMovie(id);
        if(rateEntity == null){
            throw new IllegalArgumentException("puntaje no encontrado");
        }
        return new Rate(rateEntity.getId(), rateEntity.getIdMovie(), rateEntity.getRateUser(), rateEntity.getFinalRate());
    }
}
