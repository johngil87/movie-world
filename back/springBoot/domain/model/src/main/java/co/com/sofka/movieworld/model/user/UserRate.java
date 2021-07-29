package co.com.sofka.movieworld.model.user;

import co.com.sofka.movieworld.model.movie.values.Score;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class UserRate {

    private String idUser;
    private String idMovie;
    private Score puntaje;


    public UserRate(String idUser, String idMovie, Score puntaje) {
        this.idUser = idUser;
        this.idMovie = idMovie;
        this.puntaje = puntaje;
    }

    public String getIdUser() {
        return idUser;
    }

    public void setIdUser(String idUser) {
        this.idUser = idUser;
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
