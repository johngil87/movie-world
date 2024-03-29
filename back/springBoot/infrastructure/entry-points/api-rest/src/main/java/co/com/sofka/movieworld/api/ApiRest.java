package co.com.sofka.movieworld.api;

import co.com.sofka.movieworld.model.movie.Movie;
import co.com.sofka.movieworld.model.user.User;
import co.com.sofka.movieworld.usecase.movie.*;
import co.com.sofka.movieworld.usecase.user.*;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.PATCH})
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class ApiRest {

    private final MovieMapper movieMapper;
    private final UserMapper userMapper;
    private final UserRateMapper userRateMapper;
    private final CreateMovieUseCase createMovieUseCase;
    private final GetMoviesUseCase getMoviesUseCase;
    private final GetTopMoviesUseCase topMoviesUseCase;
    private final CreateUserUseCase createUserUseCase;
    private final AddFavoritesUseCase addFavoritesUseCase;
    private final VoteMovieUseCase voteMovieUseCase;
    private final RemoveFavoritesUseCase removeFavoritesUseCase;
    private final GetMovieByCategoryUseCase getMovieByCategoryUseCase;
    private final GetVotesUserUseCase getVotesUserUseCase;
    private final UpdateUserUseCase updateUserUseCase;
    private final GetListFavoritesUseCase getListFavoritesUseCase;


    @PostMapping(path = "/createmovie")
    public ResponseEntity<MovieDTO> commandName(@RequestBody MovieDTO movieDTO) {
            Movie movie = movieMapper.dtoToMovie(movieDTO);
            return new ResponseEntity<>(movieMapper.movieToDto(createMovieUseCase.execute(movie)), HttpStatus.OK);

    }

    @GetMapping(path = "/listmovies")
    public List<MovieDTO> listarMovies() {
        List<Movie> list = getMoviesUseCase.execute();
        return movieMapper.listMovieToDto(list);
    }

    @GetMapping(path = "/listtopmovies")
    public List<MovieDTO> listarTopMovies() {
        List<Movie> list = topMoviesUseCase.execute();
        return movieMapper.listMovieToDto(list);
    }

    @PostMapping(path = "/usercreate")
    public ResponseEntity<UserDTO> crearUser(@RequestBody UserDTO userDTO) {
        try {
            User user = userMapper.dtoToUser(userDTO);
            return new ResponseEntity<>(userMapper.userToDto(createUserUseCase.execute(user)), HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }


    }

    @PutMapping(path = "/addfavorite/{idUser}/{idMovie}")
    public ResponseEntity<UserDTO> addFavoriteMovie(@PathVariable("idUser") String idUser, @PathVariable("idMovie") String idMovie) {

        User user = addFavoritesUseCase.execute(idUser, idMovie);
        return new ResponseEntity<>(userMapper.userToDto(user), HttpStatus.OK);

    }

    @PutMapping(path = "/voteMovie")
    public MovieDTO voteMovie(@RequestBody UserRateDTO userRateDTO) {
        Movie movie = voteMovieUseCase.execute(userRateMapper.dtoToUserRate(userRateDTO));
        return movieMapper.movieToDto(movie);
    }

    @PutMapping(path = "/removefavorite/{idUser}/{idMovie}")
    public ResponseEntity<UserDTO> removeFavoriteMovie(@PathVariable("idUser") String idUser, @PathVariable("idMovie") String idMovie) {
        try {
            User user = removeFavoritesUseCase.execute(idUser, idMovie);
            return new ResponseEntity<>(userMapper.userToDto(user), HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping(path = "/getmoviesbycategory/{id}")
    public ResponseEntity<List<MovieDTO>> getMoviesByCategory(@PathVariable("id") String category) {
        try {
            List<Movie> movieList = getMovieByCategoryUseCase.execute(category);
            return new ResponseEntity<>(movieMapper.listMovieToDto(movieList), HttpStatus.OK);

        } catch (Exception ex) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(path = "/getvotes/{id}")
    public ResponseEntity<Set<String>> getFavoritesUser(@PathVariable("id") String id) {

           Set<String> list = getVotesUserUseCase.execute(id);
           return new ResponseEntity<>(list, HttpStatus.OK);


    }

    @PatchMapping(path = "/updateuser")
    public ResponseEntity<UserDTO> updateUser(@RequestBody UserDTO dto){
        try{
            User user = updateUserUseCase.execute(userMapper.dtoToUser(dto));
            return new ResponseEntity<>(userMapper.userToDto(user),HttpStatus.OK);
        }catch (Exception ex){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(path = "/listfavorites/{id}")
    public ResponseEntity<List<MovieDTO>> listFavorites(@PathVariable("id") String id){
        try{
            List<Movie> newList = getListFavoritesUseCase.execute(id);
            return new ResponseEntity<>(movieMapper.listMovieToDto(newList), HttpStatus.OK);
        }catch (Exception exception){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }
}
