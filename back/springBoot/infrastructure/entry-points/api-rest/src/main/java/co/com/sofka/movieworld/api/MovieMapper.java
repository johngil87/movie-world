package co.com.sofka.movieworld.api;


import co.com.sofka.movieworld.model.movie.Movie;
import co.com.sofka.movieworld.model.movie.values.Name;
import co.com.sofka.movieworld.model.movie.values.Score;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class MovieMapper {

    public MovieDTO movieToDto(Movie movie){
        return new MovieDTO(
                movie.getId(),
                movie.getTitleMovie().getValue(),
                movie.getPuntaje().getValue(),
                movie.getDirector(),
                movie.getCharacter(),
                movie.getCategory(),
                movie.getUrlTrailer(),
                movie.getUrlImage(),
                movie.getPlot());
    }

    public Movie dtoToMovie(MovieDTO dto){
        Name nombre = new Name(dto.getTitle());
        Score puntaje = new Score(dto.getRate());
        return new Movie(
                dto.getId(),
                dto.getMovieDirector(),
                dto.getCategory(),
                dto.getCharacters(),
                nombre,
                puntaje,
                dto.getUrlTrailer(),
                dto.getUrlImage(),
                dto.getPlot());
    }

    public List<MovieDTO> listMovieToDto(List<Movie> list){
        List<MovieDTO> listDto = new ArrayList<>();
        list.forEach(it->
                listDto.add(movieToDto(it)));
        return listDto;
    }
}
