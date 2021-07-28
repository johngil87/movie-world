package co.com.sofka.movieworld.model.movie.values;

import java.util.Objects;

public class PlotMovie {

    private final String value;

    public PlotMovie(String nombre) {
        Objects.requireNonNull(nombre, "el resumen no puede ser nulo");
        if(nombre.length()<20){
            throw  new IllegalArgumentException("el resumen tiene que tener mas de 20 caracteres");
        }
        this.value = nombre;
    }

    public String getValue(){
        return value;
    }
}
