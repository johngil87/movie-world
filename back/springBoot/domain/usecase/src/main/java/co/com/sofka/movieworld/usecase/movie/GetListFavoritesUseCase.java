package co.com.sofka.movieworld.usecase.movie;

import co.com.sofka.movieworld.model.movie.Movie;
import co.com.sofka.movieworld.model.movie.gateways.MovieRepository;
import co.com.sofka.movieworld.model.user.gateways.UserRepository;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@RequiredArgsConstructor
public class GetListFavoritesUseCase {

    private final MovieRepository repository;
    private final UserRepository userRepository;

    public List<Movie> execute(String idUser){
        Set<String> listId = userRepository.findUserById(idUser).getIdFavorites();
        if (listId != null){
            List<Movie> newList= new ArrayList<>();
            listId.forEach((String id)-> {
                newList.add(repository.findMovieById(id));
            });
            return newList;
        }
     return new ArrayList<>();
    }

}
