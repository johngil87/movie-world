package co.com.sofka.movieworld.model.user.gateways;

import co.com.sofka.movieworld.model.user.Rate;
import co.com.sofka.movieworld.model.user.UserRate;

public interface RateRepository {

    Rate setRate(Rate rate);
    Rate findRateByMovie(String id);
}
