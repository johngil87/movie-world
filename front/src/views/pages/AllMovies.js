import React, {useEffect} from 'react';
import {bindActionCreators} from "redux";
import {getMoviesWithoutFilter, getMoviesByTitle, getMoviesByCategory} from "../../application/actions/movie";
import { connect } from "react-redux";
import {getMovieList} from "../../application/selectors/movieList";
import { useForm } from "react-hook-form";

import Movies from "../components/Movies";


const AllMovies = ({getMoviesWithoutFilter, getMoviesByTitle, getMoviesByCategory, movieList, user}) => {

  useEffect(() => {
    getMoviesWithoutFilter();
  }, []) 

  return (
    <div class="container">
      <h2 class="text-center mb-4">All Movies</h2>
      <hr></hr>
      <Movies movies = {movieList}/>
    </div>
  );   
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getMoviesWithoutFilter, getMoviesByTitle, getMoviesByCategory}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    movieList: getMovieList(state),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies);