import React, {useEffect} from 'react';
import {bindActionCreators} from "redux";
import {getCurrentMovie, addFavoriteMovie, getFavoriteMovies} from "../../application/actions/movie";
import { connect } from "react-redux";
import {getUser} from "../../application/selectors/user";
import {getLoading} from "../../application/selectors/ui";
import {getMovie, getError} from "../../application/selectors/movie";
import { useParams } from 'react-router-dom';



const Movie = ({getCurrentMovie, addFavoriteMovie, getFavoriteMovies, user, movie, loading, error}) => {
    const {movieId} = useParams()//jhon1

    useEffect(() => {
        getFavoriteMovies(user, false);
        getCurrentMovie(movieId);
    }, [])

    const addMovie = (userId, movieId) => {//jhon1
        addFavoriteMovie(userId, movieId);
    }

    return (
        //jhon1
        <div className="container">
            {loading ?
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            : ( 
                <div>
                  {error ? 
                    <div>{error}</div> 
                  : 
                    <div>
                      {movie.isFavorite ? 
                        null
                      : 
                        <button className="mt-5 btn btn-primary px-4" onClick={() => addMovie(user, movieId)}> 
                          <i className="bi bi-google"/> Add to favorite
                        </button> 
                      }
                      <div>Title: {movie.title}</div>
                      <div>Rate: {movie.rate}</div>
                      <div>Director: {movie.director}</div>
                      <div>Category: {movie.category}</div>
                      <div>Trailer: {movie.trailer}</div>
                      <div>Image: {movie.image}</div>
                      <div>Plot: {movie.plot}</div>
                      <div>
                        <div>Actors:</div>
                          {movie.actors.map((actor,index) =>
                            <div key={index}>
                              <div>{actor}</div>
                            </div> 
                          )}
                        </div>
                    </div>
                  }
                </div>
            )}
        </div>   
    )
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getCurrentMovie, addFavoriteMovie, getFavoriteMovies}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
    movie: getMovie(state),
    loading: getLoading(state),
    error: getError(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);