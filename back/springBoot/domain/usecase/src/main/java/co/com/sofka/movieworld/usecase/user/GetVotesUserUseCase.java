package co.com.sofka.movieworld.usecase.user;


import co.com.sofka.movieworld.model.user.gateways.UserRepository;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Set;

@RequiredArgsConstructor
public class GetVotesUserUseCase {

    private final UserRepository repository;

    public Set<String> execute(String idUser){
        return repository.listVotes(idUser);
    }


}
