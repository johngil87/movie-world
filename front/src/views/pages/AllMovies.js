import React, {useEffect} from 'react';
import {bindActionCreators} from "redux";
import {getMoviesWithoutFilter, getMoviesByTitle, getMoviesByCategory} from "../../application/actions/movie";
import { connect } from "react-redux";
import {getMovieList} from "../../application/selectors/movieList";
import { useForm } from "react-hook-form";

import Movies from "../components/Movies";


const AllMovies = ({getMoviesWithoutFilter, getMoviesByTitle, getMoviesByCategory, movieList, user}) => {
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    getMoviesWithoutFilter();
  }, []) 

  const onSubmitTitle = async (data) => {
    getMoviesByTitle(data.title);
  };

  return (
    <div class="container">
      <h2 class="text-center mb-4">All Movies</h2>
      <hr></hr>
      <div>
        <div className="d-flex justify-content-between">
          
          <form className="form-inline" onSubmit={handleSubmit(onSubmitTitle)}>
            <div className="form-group">
              <label htmlFor="title">Search by title:</label>
              <input className="form-control" type="text" placeholder="Title" name="title" id="title" {...register("title")}></input>
            </div>
            <button className="btn btn-success" type="submit">Buscar</button>
          </form>

        </div>
      </div>
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