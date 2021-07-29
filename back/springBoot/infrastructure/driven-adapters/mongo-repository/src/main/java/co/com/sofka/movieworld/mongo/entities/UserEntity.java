package co.com.sofka.movieworld.mongo.entities;

import co.com.sofka.movieworld.model.movie.values.Name;
import co.com.sofka.movieworld.model.movie.values.UrlResource;
import co.com.sofka.movieworld.model.user.UserRate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Set;

@Document
public class UserEntity {

    @Id
    private String id;
    private Name nombre;
    private String correo;
    private UrlResource image;
    private Set<String> idFavorites;
    private Set<UserRate>  rate;

    public UserEntity(String id, Name nombre, String correo, UrlResource image, Set<String> idFavorites, Set<UserRate> rate) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.image = image;
        this.idFavorites = idFavorites;
        this.rate = rate;
    }

    public UserEntity(Name nombre, String correo, UrlResource image, Set<String> idFavorites, Set<UserRate> rate) {
        this.nombre = nombre;
        this.correo = correo;
        this.image = image;
        this.idFavorites = idFavorites;
        this.rate = rate;
    }

    public UserEntity() {
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

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
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

    public Set<UserRate> getRate() {
        return rate;
    }

    public void setRate(Set<UserRate> rate) {
        this.rate = rate;
    }
}
