package co.com.sofka.movieworld.model.movie.values;

import java.util.Objects;

public class Score {

    private final Double value;

    public Score(Double puntaje) {
        Objects.requireNonNull(puntaje, "el puntaje no puede ser nulo");
        if(puntaje < 0){
            throw  new IllegalArgumentException("el puntaje tiene que ser mayor a 0");
        }
        if(puntaje > 100){
            throw  new IllegalArgumentException("el puntaje no puede ser mayor a 100");
        }
        this.value = puntaje;
    }

    public Double getValue(){
        return value;
    }
}
