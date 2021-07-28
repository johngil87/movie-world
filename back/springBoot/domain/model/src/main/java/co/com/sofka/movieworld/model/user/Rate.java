package co.com.sofka.movieworld.model.user;

import co.com.sofka.movieworld.model.movie.values.Score;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class Rate {

    private String idMovie;
    private Score puntaje;

    public Rate(String idMovie, Score puntaje) {
        this.idMovie = idMovie;
        this.puntaje = puntaje;
    }

    public String getIdMovie() {
        return idMovie;
    }

    public void setIdMovie(String idMovie) {
        this.idMovie = idMovie;
    }

    public Score getPuntaje() {
        return puntaje;
    }

    public void setPuntaje(Score puntaje) {
        this.puntaje = puntaje;
    }
}
