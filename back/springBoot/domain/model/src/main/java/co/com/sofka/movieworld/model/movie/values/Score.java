package co.com.sofka.movieworld.model.movie.values;

import java.util.Objects;

public class Score {

    private final Double value;

    public Score(Double value) {
        Objects.requireNonNull(value, "el puntaje no puede ser nulo");
        if(value < 0){
            throw  new IllegalArgumentException("el puntaje tiene que ser mayor a 0");
        }
        if(value > 100){
            throw  new IllegalArgumentException("el puntaje no puede ser mayor a 100");
        }
        this.value = value;
    }

    public Double getValue(){
        return value;
    }
}
