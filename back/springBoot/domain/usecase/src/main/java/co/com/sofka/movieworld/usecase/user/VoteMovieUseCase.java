package co.com.sofka.movieworld.usecase.user;


import co.com.sofka.movieworld.model.movie.Movie;
import co.com.sofka.movieworld.model.movie.gateways.MovieRepository;
import co.com.sofka.movieworld.model.movie.values.Score;
import co.com.sofka.movieworld.model.user.Rate;
import co.com.sofka.movieworld.model.user.UserRate;
import co.com.sofka.movieworld.model.user.User;
import co.com.sofka.movieworld.model.user.gateways.RateRepository;
import co.com.sofka.movieworld.model.user.gateways.UserRepository;
import lombok.RequiredArgsConstructor;

import java.util.HashSet;

@RequiredArgsConstructor
public class VoteMovieUseCase {

    private final UserRepository repository;
    private final RateRepository rateRepository;
    private final MovieRepository movieRepository;

    public Movie execute(UserRate userRate){
        User user = repository.findUserById(userRate.getIdUser());
        Rate rate = rateRepository.findRateByMovie(userRate.getIdMovie());
        Movie movie = movieRepository.findMovieById(userRate.getIdMovie());
        rate.addRate(userRate.getPuntaje().getValue());
        if(user.getRate() == null){
            user.setRate(new HashSet<>());
        }
        user.addRateMovie(userRate);
        movie.setPuntaje(new Score(rate.getFinalRate()));
        repository.saveUser(user);
        rateRepository.setRate(rate);
        movieRepository.saveMovie(movie);
        return movie;
    }

}
