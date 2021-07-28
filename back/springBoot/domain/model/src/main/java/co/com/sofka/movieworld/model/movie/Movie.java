package co.com.sofka.movieworld.model.movie;
import co.com.sofka.movieworld.model.movie.values.Name;
import co.com.sofka.movieworld.model.movie.values.PlotMovie;
import co.com.sofka.movieworld.model.movie.values.Score;
import co.com.sofka.movieworld.model.movie.values.UrlResource;
import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Data
@Builder(toBuilder = true)
public class Movie {

    private String id;
    private Director director;
    private Set<Category> category;
    private Set<Character> character;
    private Name titleMovie;
    private Score puntaje;
    private UrlResource urlTrailer;
    private UrlResource urlImage;
    private PlotMovie plot;

    public Movie(Director director, Set<Category> category, Set<Character> character, Name titleMovie, Score puntaje, UrlResource urlTrailer, UrlResource urlImage, PlotMovie plot) {
        this.director = director;
        this.category = category;
        this.character = character;
        this.titleMovie = titleMovie;
        this.puntaje = puntaje;
        this.urlTrailer = urlTrailer;
        this.urlImage = urlImage;
        this.plot = plot;
    }

    public Movie(String id, Director director, Set<Category> category, Set<Character> character, Name titleMovie, Score puntaje, UrlResource urlTrailer, UrlResource urlImage, PlotMovie plot) {
        this.id = id;
        this.director = director;
        this.category = category;
        this.character = character;
        this.titleMovie = titleMovie;
        this.puntaje = puntaje;
        this.urlTrailer = urlTrailer;
        this.urlImage = urlImage;
        this.plot = plot;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Director getDirector() {
        return director;
    }

    public void setDirector(Director director) {
        this.director = director;
    }

    public Set<Category> getCategory() {
        return category;
    }

    public void setCategory(Set<Category> category) {
        this.category = category;
    }

    public Set<Character> getCharacter() {
        return character;
    }

    public void setCharacter(Set<Character> character) {
        this.character = character;
    }

    public Name getTitleMovie() {
        return titleMovie;
    }

    public void setTitleMovie(Name titleMovie) {
        this.titleMovie = titleMovie;
    }

    public Score getPuntaje() {
        return puntaje;
    }

    public void setPuntaje(Score puntaje) {
        this.puntaje = puntaje;
    }

    public UrlResource getUrlTrailer() {
        return urlTrailer;
    }

    public void setUrlTrailer(UrlResource urlTrailer) {
        this.urlTrailer = urlTrailer;
    }

    public UrlResource getUrlImage() {
        return urlImage;
    }

    public void setUrlImage(UrlResource urlImage) {
        this.urlImage = urlImage;
    }

    public PlotMovie getPlot() {
        return plot;
    }

    public void setPlot(PlotMovie plot) {
        this.plot = plot;
    }
}
