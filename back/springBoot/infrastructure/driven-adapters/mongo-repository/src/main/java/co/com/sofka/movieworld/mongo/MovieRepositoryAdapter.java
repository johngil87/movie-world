package co.com.sofka.movieworld.mongo;

import co.com.sofka.movieworld.model.movie.Movie;
import co.com.sofka.movieworld.model.movie.gateways.MovieRepository;
import co.com.sofka.movieworld.model.movie.values.Name;
import co.com.sofka.movieworld.model.movie.values.Score;
import co.com.sofka.movieworld.mongo.entities.MovieEntity;
import co.com.sofka.movieworld.mongo.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class MovieRepositoryAdapter extends AdapterOperations<MovieEntity, MovieEntity, String, MovieDBRepository>
implements MovieRepository
{

    public MovieRepositoryAdapter(MovieDBRepository repository, ObjectMapper mapper) {
        /**
         *  Could be use mapper.mapBuilder if your domain model implement builder pattern
         *  super(repository, mapper, d -> mapper.mapBuilder(d,ObjectModel.ObjectModelBuilder.class).build());
         *  Or using mapper.map with the class of the object model
         */
        super(repository, mapper, d -> mapper.map(d, MovieEntity.class));
    }

    @Override
    public List<Movie> findAllMovie() {
        return null;
    }

    @Override
    public List<Movie> findAllMovieTop() {
        return null;
    }

    @Override
    public Movie findMovieById(String id) {
        Optional<MovieEntity> entity = this.repository.findById(id);
        return new Movie(entity.get().getId(), entity.get().getDirector(), entity.get().getCategoria(),entity.get().getActores(), new Name(entity.get().getTitulo()), new Score(entity.get().getPuntaje()), entity.get().getUrlTrailer(), entity.get().getUrlImagen(), entity.get().getResumen());
    }

    @Override
    public Movie saveMovie(Movie movie) {
        MovieEntity movieE = new MovieEntity(movie.getTitleMovie().getValue(), movie.getCharacter(), movie.getDirector(), movie.getPuntaje().getValue(), movie.getCategory(), movie.getUrlTrailer(), movie.getUrlImage(), movie.getPlot());
        MovieEntity newMovieEntity = this.repository.save(movieE);
        Movie movieA = movie;
        movieA.setId(newMovieEntity.getId());
        return movieA;
    }
}
