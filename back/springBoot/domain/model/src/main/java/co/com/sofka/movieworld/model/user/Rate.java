package co.com.sofka.movieworld.model.user;


import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder(toBuilder = true)
public class Rate {

    private String id;
    private String idMovie;
    private List<Double> rateUser;
    private Double finalRate;

    public Rate(String id, String idMovie, List<Double> rateUser, Double finalRate ) {
        this.id = id;
        this.idMovie = idMovie;
        this.rateUser = rateUser;
        this.finalRate = finalRate;
    }

    public Rate(String idMovie, List<Double> rateUser, Double finalRate) {
        this.idMovie = idMovie;
        this.rateUser = rateUser;
        this.finalRate = finalRate;
    }

    public void addRate(Double rate){
        rateUser.add(rate);
        calculateStore();
    }


    private void calculateStore(){
        Double accumulated = this.rateUser.stream().reduce((a,b)-> a+b).get();
        int count = this.rateUser.size() * 5;
        this.finalRate = accumulated * 100 / count;
    }

    public Double getFinalRate() {
        return finalRate;
    }

    public void setFinalRate(Double finalRate) {
        this.finalRate = finalRate;
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


}
