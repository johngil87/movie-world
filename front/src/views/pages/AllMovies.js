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
    if(data.category === "Mostrar todas"){
      getMoviesWithoutFilter();
    } else{
      getMoviesByCategory(data.category)
    }
    
  };

  const onSubmitTitle = async (data) => {
    if(data.title != ""){
      getMoviesByTitle(data.title);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Lista de Películas</h1>
      <label htmlFor="category">Buscar por Género:</label>
      <div className="d-flex justify-content-between mb-5">
        <form className="form-inline" onSubmit={handleSubmit(onSubmitCategory)}>
          <select {...register("category")} className="form-control mr-sm-2" name="category" id="category">
            <option value="Mostrar todas">Mostrar todas</option>
            <option value="Accion">Accion</option>
            <option value="Romance">Romance</option>
            <option value="Terror">Terror</option>
            <option value="Drama">Drama</option>
            <option value="Ciencia Ficcion">Ciencia Ficcion</option>
            <option value="Comedia">Comedia</option>
            <option value="Crimen">Crimen</option>
            <option value="Fantasia">Fantasia</option>
          </select>
          <button className="btn btn-success" type="submit">Buscar</button>
        </form> 

        <form className="form-inline" onSubmit={handleSubmit(onSubmitTitle)}>
          <div className="form-group">
            <input className="form-control mr-sm-2" type="text" placeholder="Bscar por nombre" name="title" id="title" {...register("title")}></input>
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
            <div className="row">
              <Movies movies={movieList} user={user} isFavorite={false}/>
              <TopMovies movies={topMovieList}/>
            </div>  
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