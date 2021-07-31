package co.com.sofka.movieworld.mongo;

import co.com.sofka.movieworld.model.movie.Movie;
import co.com.sofka.movieworld.model.movie.gateways.MovieRepository;
import co.com.sofka.movieworld.model.movie.values.Name;
import co.com.sofka.movieworld.model.movie.values.Score;
import co.com.sofka.movieworld.mongo.entities.Movies;
import co.com.sofka.movieworld.mongo.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Repository
public class MovieRepositoryAdapter extends AdapterOperations<Movies, Movies, String, MovieDBRepository>
        implements MovieRepository {

    public MovieRepositoryAdapter(MovieDBRepository repository, ObjectMapper mapper) {
        /**
         *  Could be use mapper.mapBuilder if your domain model implement builder pattern
         *  super(repository, mapper, d -> mapper.mapBuilder(d,ObjectModel.ObjectModelBuilder.class).build());
         *  Or using mapper.map with the class of the object model
         */
        super(repository, mapper, d -> mapper.map(d, Movies.class));
    }

    @Override
    public List<Movie> findAllMovie() {
        List<Movie> movieList = new ArrayList<>();
        List<Movies> list = this.repository.findAll();
        Movie movie;
        for (int i = 0; i < list.size(); i++) {
            movie = new Movie(list.get(i).getId(), list.get(i).getMovieDirector(), list.get(i).getCategory(), list.get(i).getCharacters(), new Name(list.get(i).getTitle()), new Score(list.get(i).getRate()), list.get(i).getUrlTrailer(), list.get(i).getUrlImage(), list.get(i).getPlot());
            movieList.add(movie);
        }
        return movieList;
    }

    @Override
    public List<Movie> findAllMovieTop() {
        List<Movie> movieList = new ArrayList<>();
        List<Movies> list = this.repository.findByRateGreaterThanOrderByRateDesc(89.0);
        for (int i=0; i<list.size(); i++ ){
            Movie movie = new Movie(list.get(i).getId(), list.get(i).getMovieDirector(), list.get(i).getCategory(), list.get(i).getCharacters(), new Name(list.get(i).getTitle()), new Score(list.get(i).getRate()), list.get(i).getUrlTrailer(), list.get(i).getUrlImage(), list.get(i).getPlot());
            movieList.add(movie);
        }
        return movieList;
    }

    @Override
    public Movie findMovieById(String id) {
        Optional<Movies> entity = this.repository.findById(id);
        return new Movie(entity.get().getId(), entity.get().getMovieDirector(), entity.get().getCategory(), entity.get().getCharacters(), new Name(entity.get().getTitle()), new Score(entity.get().getRate()), entity.get().getUrlTrailer(), entity.get().getUrlImage(), entity.get().getPlot());
    }

    @Override
    public Movie saveMovie(Movie movie) {
        Movies movieE = new Movies(movie.getId(), movie.getTitleMovie().getValue(), movie.getCharacter(), movie.getDirector(), movie.getPuntaje().getValue(), movie.getCategory(), movie.getUrlTrailer(), movie.getUrlImage(), movie.getPlot());
        Movies newMovieEntity = this.repository.save(movieE);
        Movie movieA = movie;
        movieA.setId(newMovieEntity.getId());
        return movieA;
    }

    @Override
    public List<Movie> findAllByCategory(String category) {
        List<Movie> movieList = new ArrayList<>();
        List<Movies> list = this.repository.findAll().stream().filter(filterByCategory(category)).collect(Collectors.toList());
        for (int i=0; i<list.size(); i++ ){
            Movie movie = new Movie(list.get(i).getId(), list.get(i).getMovieDirector(), list.get(i).getCategory(), list.get(i).getCharacters(), new Name(list.get(i).getTitle()), new Score(list.get(i).getRate()), list.get(i).getUrlTrailer(), list.get(i).getUrlImage(), list.get(i).getPlot());
            movieList.add(movie);
        }
        return movieList;
    }

   private Predicate<Movies> filterByCategory(String category){
        return (Movies movie)->{
            return movie.getCategory().stream().map(it-> it.getNombre().getValue()).collect(Collectors.joining()).equals(category);
        };
   }

}
