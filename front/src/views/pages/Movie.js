import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import {getCurrentMovie, addFavoriteMovie, getFavoriteMovies, getVotedMovies,voteMovie} from "../../application/actions/movie";
import { connect } from "react-redux";
import { getUser } from "../../application/selectors/user";
import { getLoading } from "../../application/selectors/ui";
import { getMovie, getError } from "../../application/selectors/movie";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";


const Movie = ({addFavoriteMovie, getFavoriteMovies, getVotedMovies, getCurrentMovie, user, movie, loading, error, voteMovie}) => {

  const { movieId } = useParams();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    getFavoriteMovies(user, false);
    getVotedMovies(user);
    setTimeout(() => {
      getCurrentMovie(movieId);
    }, 1000);
  }, [addFavoriteMovie, voteMovie]);

  const onSubmit = async (data) => {
    voteMovie(user, movieId, (parseFloat(data.score)+0.01));
  };

  const addMovie = (userId, movieId) => {
    addFavoriteMovie(userId, movieId);
  };

  return (
    <div className="container">
      {loading ? (
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div>
          {error ? (
            <div>{error}</div>
          ) : (
            <div>
              <div className="row mb-4">
			          <div className="col mt-1">
				          <img src={movie.image} className="rounded mx-auto d-block border-3 border-dark img-fluid img-thumbnail imgMovie" alt="poster"></img>
                </div>
			          <div className="col-8 ">
                  
                  {movie.isFavorite ? null : (
                    <button className="btn btn-success px-4" onClick={() => addMovie(user, movieId)}>
                      <i className="bi bi-google" /> Agregar a favoritos
                    </button>
                  )}
              
                  {movie.isVoted ? null : (
                    <form className="form-inline mt-2" onSubmit={handleSubmit(onSubmit)}>
                    <select {...register("score")} className="form-control mr-sm-2" name="score" id="score">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <button className="btn btn-success" type="submit">Votar</button>
                  </form>
                  )}
                  
                  <hr></hr>
				          <div className="p-3">
					          <p className="text-center h3 font-weight-bold text-uppercase">{movie.title}</p>
				          </div>
				          <div>
					          <div className="text-start font-weight-light p-1">Calificación: { Math.round(movie.rate)}
					          </div>
					          <div className="text-start font-weight-light p-1">Director: {movie.director}
					          </div>
                    <div className="text-start font-weight-light p-1">Reparto:</div>
                      {movie.actors.map((actor, index) => (
                        <div className="text-start font-weight-light p-1" key={index}>
                          <div>{actor}</div>
                        </div>
                      ))}
					          <div className="text-start font-weight-light p-1">Trama: {movie.plot}</div>
					          <div className="p-3">
                      {movie.trailer === "url del trailer de la pelicula" ?
                        null
                      :
                        <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getCurrentMovie, addFavoriteMovie, getFavoriteMovies, getVotedMovies, voteMovie}, dispatch);
};

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
    movie: getMovie(state),
    loading: getLoading(state),
    error: getError(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
