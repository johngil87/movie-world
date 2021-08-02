package co.com.sofka.movieworld.model.movie.values;

import java.util.Objects;

public class UrlResource {

    private final String value;

    public UrlResource(String value) {
        Objects.requireNonNull(value, "el recurso no puede ser nulo");
        this.value = value;
    }

    public String getValue(){
        return value;
    }
}
