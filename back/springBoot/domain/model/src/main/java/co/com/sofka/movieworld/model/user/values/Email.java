package co.com.sofka.movieworld.model.user.values;

import java.util.Objects;

public class Email {

    private final String value;

    public Email(String value) {
        this.value = Objects.requireNonNull(value, "El correo es obligatorio");
        correoIsBlank(value.isEmpty(), "El correo no puede estar vacio");
        if(!value.matches("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")){
            throw new IllegalArgumentException("Coreo no valido");
        }
        if(this.value.length() <= 5) {
            throw new IllegalArgumentException("Debe contener mas de 5 caracteres");
        }
    }

    private void correoIsBlank(boolean blank, String s) {
        if (blank) {
            throw new IllegalArgumentException(s);
        }
    }

    public String getValue() {
        return value;
    }
}
