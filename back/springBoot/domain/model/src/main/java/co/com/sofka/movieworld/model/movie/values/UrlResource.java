package co.com.sofka.movieworld.model.movie.values;

import java.util.Objects;

public class UrlResource {

    private final String value;

    public UrlResource(String recourse) {
        Objects.requireNonNull(recourse, "el recurso no puede ser nulo");
        this.value = recourse;
    }

    public String getValue(){
        return value;
    }
}
