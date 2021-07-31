package co.com.sofka.movieworld.mongo.entities;

import co.com.sofka.movieworld.model.movie.Category;
import co.com.sofka.movieworld.model.movie.Character;
import co.com.sofka.movieworld.model.movie.Director;
import co.com.sofka.movieworld.model.movie.values.PlotMovie;
import co.com.sofka.movieworld.model.movie.values.UrlResource;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Set;

@Document
public class Movies {

    @Id
    private String id;
    private String title;
    private Set<Character> characters;
    private Director movieDirector;
    private Double rate;
    private Set<Category> category;
    private UrlResource urlTrailer;
    private UrlResource urlImage;
    private PlotMovie plot;

    public Movies(String id, String title, Set<Character> characters, Director movieDirector, Double rate, Set<Category> category, UrlResource urlTrailer, UrlResource urlImage, PlotMovie plot) {
        this.id = id;
        this.title = title;
        this.characters = characters;
        this.movieDirector = movieDirector;
        this.rate = rate;
        this.category = category;
        this.urlTrailer = urlTrailer;
        this.urlImage = urlImage;
        this.plot = plot;
    }

    public Movies(String title, Set<Character> characters, Director movieDirector, Double rate, Set<Category> category, UrlResource urlTrailer, UrlResource urlImage, PlotMovie plot) {
        this.title = title;
        this.characters = characters;
        this.movieDirector = movieDirector;
        this.rate = rate;
        this.category = category;
        this.urlTrailer = urlTrailer;
        this.urlImage = urlImage;
        this.plot = plot;
    }

    public Movies() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Set<Character> getCharacters() {
        return characters;
    }

    public void setCharacters(Set<Character> characters) {
        this.characters = characters;
    }

    public Director getMovieDirector() {
        return movieDirector;
    }

    public void setMovieDirector(Director movieDirector) {
        this.movieDirector = movieDirector;
    }

    public Double getRate() {
        return rate;
    }

    public void setRate(Double rate) {
        this.rate = rate;
    }

    public Set<Category> getCategory() {
        return category;
    }

    public void setCategory(Set<Category> category) {
        this.category = category;
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
