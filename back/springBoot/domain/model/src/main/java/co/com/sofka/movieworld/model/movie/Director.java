package co.com.sofka.movieworld.model.movie;

import co.com.sofka.movieworld.model.movie.values.Name;

public class Director {

    private Name nombre;

    public Director(Name nombre) {
        this.nombre = nombre;
    }

    public Director() {
    }

    public Name getName() {
        return nombre;
    }

    public void setName(Name nombre) {
        this.nombre = nombre;
    }
}
