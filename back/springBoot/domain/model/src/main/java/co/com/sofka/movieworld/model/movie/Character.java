package co.com.sofka.movieworld.model.movie;

import co.com.sofka.movieworld.model.movie.values.Name;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class Character {

    private Name nombre;

    public Character(Name nombre) {
        this.nombre = nombre;
    }

    public Character() {
    }

    public Name getNombre() {
        return nombre;
    }

    public void setNombre(Name nombre) {
        this.nombre = nombre;
    }
}
