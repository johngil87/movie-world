package co.com.sofka.movieworld.config;

import co.com.sofka.movieworld.model.movie.gateways.MovieRepository;
import co.com.sofka.movieworld.model.user.gateways.UserRepository;
import co.com.sofka.movieworld.usecase.movie.CreateMovieUseCase;
import co.com.sofka.movieworld.usecase.movie.GetMovieByIdUseCase;
import co.com.sofka.movieworld.usecase.user.CreateUserUseCase;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;

@Configuration
@ComponentScan(basePackages = "co.com.sofka.movieworld.usecase",
        includeFilters = {
                @ComponentScan.Filter(type = FilterType.REGEX, pattern = "^.+UseCase$")
        },
        useDefaultFilters = false)
public class UseCasesConfig {

        public CreateMovieUseCase createMovieUseCase(MovieRepository repository){
                return new CreateMovieUseCase(repository);
        }

        public CreateUserUseCase createUserUseCase(UserRepository repository){
                return new CreateUserUseCase(repository);
        }
}
