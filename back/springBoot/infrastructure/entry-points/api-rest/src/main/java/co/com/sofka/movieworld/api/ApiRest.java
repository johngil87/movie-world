package co.com.sofka.movieworld.api;
import co.com.sofka.movieworld.model.movie.Movie;
import co.com.sofka.movieworld.usecase.movie.CreateMovieUseCase;
import co.com.sofka.movieworld.usecase.movie.GetMovieByIdUseCase;
import co.com.sofka.movieworld.usecase.movie.GetMoviesUseCase;
import co.com.sofka.movieworld.usecase.movie.GetTopMoviesUseCase;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class ApiRest {

    private final MovieMapper movieMapper;
    private final CreateMovieUseCase createMovieUseCase;
    private final GetMovieByIdUseCase getMovieByIdUseCase;
    private final GetMoviesUseCase getMoviesUseCase;
    private final GetTopMoviesUseCase topMoviesUseCase;


    @PostMapping(path = "/createmovie")
    public ResponseEntity<MovieDTO> commandName(@RequestBody MovieDTO movieDTO) {
        try {
            Movie movie = movieMapper.dtoToMovie(movieDTO);
            return new ResponseEntity<>(movieMapper.movieToDto(createMovieUseCase.execute(movie)), HttpStatus.OK);
        }catch (Exception ex){
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping(path = "/movie/{id}")
    public  ResponseEntity<MovieDTO> getMovie(@PathVariable("id") String id){

            return  new ResponseEntity<>(movieMapper.movieToDto(getMovieByIdUseCase.getMovieById(id)),HttpStatus.OK);

    }

    @GetMapping(path = "/listmovies")
    public List<MovieDTO> listarMovies(){
        List<Movie> list = getMoviesUseCase.execute();
        return movieMapper.listMovieToDto(list);
    }

    @GetMapping(path = "/listtopmovies")
    public List<MovieDTO> listarTopMovies(){
        List<Movie> list = topMoviesUseCase.execute();
        return movieMapper.listMovieToDto(list);
    }
}
