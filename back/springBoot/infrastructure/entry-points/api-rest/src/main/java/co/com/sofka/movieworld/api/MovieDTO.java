package co.com.sofka.movieworld.api;

import co.com.sofka.movieworld.model.movie.Category;
import co.com.sofka.movieworld.model.movie.Character;
import co.com.sofka.movieworld.model.movie.Director;
import co.com.sofka.movieworld.model.movie.values.PlotMovie;
import co.com.sofka.movieworld.model.movie.values.UrlResource;

import java.util.Set;

public class MovieDTO {

    private String _id;
    private String title;
    private Double rate;
    private Director movieDirector;
    private Set<Character> characters;
    private Set<Category> category;
    private UrlResource urlTrailer;
    private UrlResource urlImage;
    private PlotMovie plot;

    public MovieDTO(String id, String title, Double rate, Director movieDirector, Set<Character> characters, Set<Category> category, UrlResource urlTrailer, UrlResource urlImage, PlotMovie plot) {
        this._id = id;
        this.title = title;
        this.rate = rate;
        this.movieDirector = movieDirector;
        this.characters = characters;
        this.category = category;
        this.urlTrailer = urlTrailer;
        this.urlImage = urlImage;
        this.plot = plot;
    }

    public MovieDTO(String title, Double rate, Director movieDirector, Set<Character> characters, Set<Category> category, UrlResource urlTrailer, UrlResource urlImage, PlotMovie plot) {
        this.title = title;
        this.rate = rate;
        this.movieDirector = movieDirector;
        this.characters = characters;
        this.category = category;
        this.urlTrailer = urlTrailer;
        this.urlImage = urlImage;
        this.plot = plot;
    }

    public MovieDTO() {
    }

    public String getId() {
        return _id;
    }

    public void setId(String id) {
        this._id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Double getRate() {
        return rate;
    }

    public void setRate(Double rate) {
        this.rate = rate;
    }

    public Director getMovieDirector() {
        return movieDirector;
    }

    public void setMovieDirector(Director movieDirector) {
        this.movieDirector = movieDirector;
    }

    public Set<Character> getCharacters() {
        return characters;
    }

    public void setCharacters(Set<Character> characters) {
        this.characters = characters;
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
