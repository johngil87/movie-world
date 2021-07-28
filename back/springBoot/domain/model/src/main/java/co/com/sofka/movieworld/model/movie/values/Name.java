package co.com.sofka.movieworld.model.movie.values;

import java.util.Objects;

public class Name {

    private final String value;

    public Name(String nombre) {
        Objects.requireNonNull(nombre, "el nombre no puede ser nulo");
        if(nombre.length()<2){
            throw  new IllegalArgumentException("el nombre tiene que tener mas de 2 caracteres");
        }
        this.value = nombre;
    }

    public String getValue(){
        return value;
    }
}
