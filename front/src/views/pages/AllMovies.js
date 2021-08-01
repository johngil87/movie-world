import React, {useEffect} from 'react';
import {bindActionCreators} from "redux";
import {getMoviesWithoutFilter, getMoviesByTitle, getMoviesByCategory, getTopMovies} from "../../application/actions/movie";
import {setRedirecting} from "../../application/actions/ui";
import { connect } from "react-redux";
import {getUser} from "../../application/selectors/user";
import {getLoading} from "../../application/selectors/ui";
import {getMovieList, getTopMovieList, getError} from "../../application/selectors/movie";
import { useForm } from "react-hook-form";

import Movies from "../components/Movies";
import TopMovies from "../components/TopMovies";
import '../css/movies.css'

const AllMovies = ({getMoviesWithoutFilter, getTopMovies, getMoviesByTitle, getMoviesByCategory, movieList, user, topMovieList, loading, setRedirecting, error}) => {
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    setRedirecting(false);
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
      <TopMovies movies={topMovieList}/>

      <div className="d-flex justify-content-between">
        <form className="form-inline" onSubmit={handleSubmit(onSubmitCategory)}>
          <label htmlFor="category">Search by category:</label>
          <select {...register("category")} className="form-control mr-sm-2" name="category" id="category">
            <option value="Mostrar todos">Mostrar todos</option>
            <option value="Terror">Terror</option>
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
            <Movies movies={movieList} user={user} isFavorite={false}/>
          }
        </div>
      )}
    </div>
  );   
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getMoviesWithoutFilter, getMoviesByTitle, getMoviesByCategory, getTopMovies, setRedirecting}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    movieList: getMovieList(state),
    user: getUser(state),
    topMovieList: getTopMovieList(state),
    loading: getLoading(state),
    error: getError(state) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies);