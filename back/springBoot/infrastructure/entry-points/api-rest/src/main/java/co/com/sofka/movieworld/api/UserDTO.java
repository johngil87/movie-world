package co.com.sofka.movieworld.api;

import co.com.sofka.movieworld.model.movie.values.Name;
import co.com.sofka.movieworld.model.movie.values.UrlResource;
import co.com.sofka.movieworld.model.user.UserRate;
import co.com.sofka.movieworld.model.user.values.Email;

import java.util.Set;

public class UserDTO {

    private String id;
    private Name userName;
    private Email userEmail;
    private UrlResource userImage;
    private Set<String> idFavorites;
    private Set<UserRate> rate;

    public UserDTO(Name userName, Email userEmail, UrlResource userImage, Set<String> idFavorites, Set<UserRate> rate) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userImage = userImage;
        this.idFavorites = idFavorites;
        this.rate = rate;
    }

    public UserDTO(String id, Name userName, Email userEmail, UrlResource userImage, Set<String> idFavorites, Set<UserRate> rate) {
        this.id = id;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userImage = userImage;
        this.idFavorites = idFavorites;
        this.rate = rate;
    }

    public UserDTO() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Name getUserName() {
        return userName;
    }

    public void setUserName(Name userName) {
        this.userName = userName;
    }

    public Email getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(Email userEmail) {
        this.userEmail = userEmail;
    }

    public UrlResource getUserImage() {
        return userImage;
    }

    public void setUserImage(UrlResource userImage) {
        this.userImage = userImage;
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
