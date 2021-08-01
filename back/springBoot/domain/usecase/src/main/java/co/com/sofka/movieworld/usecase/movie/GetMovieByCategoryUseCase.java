package co.com.sofka.movieworld.usecase.movie;


import co.com.sofka.movieworld.model.movie.Movie;
import co.com.sofka.movieworld.model.movie.gateways.MovieRepository;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RequiredArgsConstructor
public class GetMovieByCategoryUseCase {

    private final MovieRepository repository;

    public List<Movie> execute(String category){
        if(isValid(category)){
            return repository.findAllByCategory(category);
        }
      throw new IllegalArgumentException("no se encuentra la categoria");
    }

    private boolean isValid(String caracter){
        List<String> list = new ArrayList<>();
        list.add("Accion");
        list.add("Drama");
        list.add("Terror");
        list.add("Fantasia");
        list.add("Comedia");
        return list.contains(caracter);
    }
}
