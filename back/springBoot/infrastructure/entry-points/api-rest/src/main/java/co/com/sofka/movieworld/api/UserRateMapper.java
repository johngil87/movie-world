package co.com.sofka.movieworld.api;

import co.com.sofka.movieworld.model.user.UserRate;
import org.springframework.stereotype.Component;

@Component
public class UserRateMapper {

    public UserRateDTO userRateToDto(UserRate userRate){
        return new UserRateDTO(
                userRate.getIdUser(),
                userRate.getIdMovie(),
                userRate.getPuntaje()
        );
    }

    public UserRate dtoToUserRate(UserRateDTO dto){
        return new UserRate(
                dto.getIdUser(),
                dto.getIdMovie(),
                dto.getPuntaje()
        );
    }
}
