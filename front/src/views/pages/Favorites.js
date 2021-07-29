import React, {useEffect} from 'react';
import {bindActionCreators} from "redux";
import {getFavoriteMovies, deleteFavoriteMovie} from "../../application/actions/movie";
import { connect } from "react-redux";
import {getMovieList} from "../../application/selectors/movieList";
import {getUser} from "../../application/selectors/user";

import Movies from "../components/Movies";


const Favorites = ({getFavoriteMovies, deleteFavoriteMovie, movieList, user}) => {
  useEffect(() => {
    getFavoriteMovies();
  }, []) 

  const deleteMovie = (user, movieId) => {
    deleteFavoriteMovie(user, movieId);
  }

  return (
    <div class="container">
      <h2 class="text-center mb-4">Favorite Movies</h2>
      <hr></hr>
      <Movies movies = {movieList} user={user} method={deleteMovie} isFavorite={true}/>
    </div>
  );   
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getFavoriteMovies, deleteFavoriteMovie}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    movieList: getMovieList(state),
    user: getUser(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);