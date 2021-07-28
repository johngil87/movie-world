package co.com.sofka.movieworld.api;
import co.com.sofka.movieworld.model.movie.Movie;
import co.com.sofka.movieworld.usecase.movie.CreateMovieUseCase;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class ApiRest {

    private final MovieMapper movieMapper;
    private final CreateMovieUseCase createMovieUseCase;


    @PostMapping(path = "/createmovie")
    public ResponseEntity<MovieDTO> commandName(@RequestBody MovieDTO movieDTO) {
        try {
            Movie movie = movieMapper.dtoToMovie(movieDTO);
            return new ResponseEntity<>(movieMapper.movieToDto(createMovieUseCase.execute(movie)), HttpStatus.OK);
        }catch (Exception ex){
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }
}
