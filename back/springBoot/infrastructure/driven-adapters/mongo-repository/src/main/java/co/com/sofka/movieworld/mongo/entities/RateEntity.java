package co.com.sofka.movieworld.mongo.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class RateEntity {

    @Id
    private String id;
    private String idMovie;
    private List<Double> rateUser;
    private Double finalRate;

    public RateEntity(String idMovie, List<Double> rateUser, Double finalRate) {
        this.idMovie = idMovie;
        this.rateUser = rateUser;
        this.finalRate = finalRate;
    }

    public RateEntity(String id, String idMovie, List<Double> rateUser, Double finalRate) {
        this.id = id;
        this.idMovie = idMovie;
        this.rateUser = rateUser;
        this.finalRate = finalRate;
    }

    public RateEntity() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getIdMovie() {
        return idMovie;
    }

    public void setIdMovie(String idMovie) {
        this.idMovie = idMovie;
    }

    public List<Double> getRateUser() {
        return rateUser;
    }

    public void setRateUser(List<Double> rateUser) {
        this.rateUser = rateUser;
    }

    public Double getFinalRate() {
        return finalRate;
    }

    public void setFinalRate(Double finalRate) {
        this.finalRate = finalRate;
    }
}
