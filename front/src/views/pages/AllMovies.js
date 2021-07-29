import React, {useEffect} from 'react';
import {bindActionCreators} from "redux";
import {getMoviesWithoutFilter, getMoviesByTitle, getMoviesByCategory, getTopMovies} from "../../application/actions/movie";
import { connect } from "react-redux";
import {getMovieList} from "../../application/selectors/movieList";
import {getTopMovieList} from "../../application/selectors/topMovieList";
import {getUser} from "../../application/selectors/user";
import { useForm } from "react-hook-form";

import Movies from "../components/Movies";
import TopMovies from "../components/TopMovies";


const AllMovies = ({getMoviesWithoutFilter, getMoviesByTitle, getMoviesByCategory, movieList, user, topMovieList}) => {
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    getMoviesWithoutFilter();
    getTopMovies();
  }, []) 

  const onSubmitCategory = async (data) => {
    getMoviesByCategory(data.category)
  };

  const onSubmitTitle = async (data) => {
    getMoviesByTitle(data.title);
  };

  return (
    <div class="container">
      <h2 class="text-center mb-4">All Movies</h2>
      <hr></hr>
      <div>
        <div className="d-flex justify-content-between">

          <TopMovies movies={topMovieList}/>

          <form className="form-inline" onSubmit={handleSubmit(onSubmitCategory)}>
            <label htmlFor="category">Search by category:</label>
            <select {...register("category")} className="form-control mr-sm-2" name="category" id="category">
              <option value="Mostrar todos">Mostrar todos</option>
              <option value="Genero1">Genero1</option>
              <option value="Genero2">Genero2</option>
            </select>
            <button className="btn btn-success" type="submit">Buscar</button>
          </form> 


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
      <Movies movies={movieList} user={user} isFavorite={false}/>
    </div>
  );   
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getMoviesWithoutFilter, getMoviesByTitle, getMoviesByCategory}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    movieList: getMovieList(state),
    user: getUser(state),
    topMovieList: getTopMovieList(state),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies);