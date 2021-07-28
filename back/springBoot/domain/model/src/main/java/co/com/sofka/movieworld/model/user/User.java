package co.com.sofka.movieworld.model.user;
import co.com.sofka.movieworld.model.movie.values.Name;
import co.com.sofka.movieworld.model.movie.values.UrlResource;
import co.com.sofka.movieworld.model.user.values.Email;
import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Data
@Builder(toBuilder = true)
public class User {

    private String id;
    private Name nombre;
    private Email correo;
    private UrlResource image;
    private Set<String> idFavorites;
    private Set<Rate> rate;

    public User(Name nombre, Email correo, UrlResource image, Set<String> idFavorites, Set<Rate> rate) {
        this.nombre = nombre;
        this.correo = correo;
        this.image = image;
        this.idFavorites = idFavorites;
        this.rate = rate;
    }

    public User(String id, Name nombre, Email correo, UrlResource image, Set<String> idFavorites, Set<Rate> rate) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.image = image;
        this.idFavorites = idFavorites;
        this.rate = rate;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Name getNombre() {
        return nombre;
    }

    public void setNombre(Name nombre) {
        this.nombre = nombre;
    }

    public Email getCorreo() {
        return correo;
    }

    public void setCorreo(Email correo) {
        this.correo = correo;
    }

    public UrlResource getImage() {
        return image;
    }

    public void setImage(UrlResource image) {
        this.image = image;
    }

    public Set<String> getIdFavorites() {
        return idFavorites;
    }

    public void setIdFavorites(Set<String> idFavorites) {
        this.idFavorites = idFavorites;
    }

    public Set<Rate> getRate() {
        return rate;
    }

    public void setRate(Set<Rate> rate) {
        this.rate = rate;
    }
}
