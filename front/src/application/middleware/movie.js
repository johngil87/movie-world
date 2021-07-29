import * as actions from '../actions/movie';
import { transformMovieListFromBack } from "./helper/helper";


const getMoviesWithoutFilterFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === actions.GET_MOVIES_WITHOUT_FILTER){
        try{
            const movieListfromBack = await api.movie.getAll();
            const movieList = transformMovieListFromBack(movieListfromBack);
            dispatch(actions.setMovieListSuccess(movieList));
        }catch (error){
            dispatch(actions.setMovieListFailure(error.message));
        }
    }
}

const getTopMoviesFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === actions.GET_TOP_MOVIES){
        try{
            const movieListfromBack = await api.movie.getTop();
            const movieList = transformMovieListFromBack(movieListfromBack);
            dispatch(actions.setTopMovieListSuccess(movieList));
        }catch (error){
            dispatch(actions.setTopMovieListFailure(error.message));
        }
    }
}

const getMoviesByTitleFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === actions.GET_MOVIES_BY_TITLE){
        try{
            const title = action.payload.title;
            const movieListfromBack = await api.movie.getByTitle(title);
            const movieList = transformMovieListFromBack(movieListfromBack);
            dispatch(actions.setMovieListSuccess(movieList));
        }catch (error){
            dispatch(actions.setMovieListFailure(error.message));
        }
    }
}

const getMoviesByCategoryFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === actions.GET_MOVIES_BY_CATEGORY){
        try{
            const category = action.payload.category;
            const movieListfromBack = await api.movie.getByCategory(category);
            const movieList = transformMovieListFromBack(movieListfromBack);
            dispatch(actions.setMovieListSuccess(movieList));
        }catch (error){
            dispatch(actions.setMovieListFailure(error.message));
        }
    }
}

const getFavoriteMoviesFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === actions.GET_FAVORITE_MOVIES){
        try{
            const userId = action.payload
            const movieListfromBack = await api.movie.getFavorites(userId);
            const movieList = transformMovieListFromBack(movieListfromBack);
            dispatch(actions.setMovieListSuccess(movieList));
        }catch (error){
            dispatch(actions.setMovieListFailure(error.message));
        }
    }
}

const deleteFavoriteMovieFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === actions.DELETE_FAVORITE_MOVIE){
        try{
            const userId = action.payload.userId;
            const movieId = action.payload.movieId;
            await api.movie.deleteFavorite(userId, movieId);
            dispatch(actions.deleteFavoriteMovieSuccess());
        }catch (error){
            dispatch(actions.deleteFavoriteMovieFailure(error.message));
        }
    }
}


export default [
    getMoviesWithoutFilterFlow,
    getTopMoviesFlow,
    getMoviesByTitleFlow,
    getMoviesByCategoryFlow,
    getFavoriteMoviesFlow,
    deleteFavoriteMovieFlow
]