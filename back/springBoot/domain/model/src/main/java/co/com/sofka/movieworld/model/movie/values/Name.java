package co.com.sofka.movieworld.model.movie.values;


import java.util.Objects;

public class Name {

    private final String value;

    public Name(String value) {
        this.value = value;
    }

    public String getValue(){
        return value;
    }
}
