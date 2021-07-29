package co.com.sofka.movieworld.model.movie.values;


public class Name {

    private final String value;

    public Name(String value) {
        if(value.length()<2){
            throw  new IllegalArgumentException("el nombre tiene que tener mas de 2 caracteres");
        }
        this.value = value;
    }

    public String getValue(){
        return value;
    }
}
