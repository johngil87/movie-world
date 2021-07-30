import React, {useEffect} from 'react';
import {bindActionCreators} from "redux";
import {getFavoriteMovies, deleteFavoriteMovie} from "../../application/actions/movie";
import { connect } from "react-redux";
import {getUser} from "../../application/selectors/user";
import {getLoading} from "../../application/selectors/ui";
import {getMovieList, getError} from "../../application/selectors/movie";

import Movies from "../components/Movies";


const Favorites = ({getFavoriteMovies, deleteFavoriteMovie, movieList, user, loading, error}) => {
  useEffect(() => {
    getFavoriteMovies(user, true);
  }, [deleteFavoriteMovie])

  const deleteMovie = (user, movieId) => {
    deleteFavoriteMovie(user, movieId);
  }

  return (
    <div class="container">
      <h2 class="text-center mb-4">Favorite Movies</h2>
      <hr></hr>
      {loading ?
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      : ( 
        <div>
          {error ? 
            <div>{error}</div> 
          : 
            <Movies movies = {movieList} user={user} method={deleteMovie} isFavorite={true}/>
          }
        </div>
      )}
    </div>
  );   
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getFavoriteMovies, deleteFavoriteMovie}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    movieList: getMovieList(state),
    user: getUser(state),
    loading: getLoading(state),
    error: getError(state) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);