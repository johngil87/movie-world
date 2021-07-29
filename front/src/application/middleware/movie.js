import {GET_MOVIES_WITHOUT_FILTER, GET_FAVORITE_MOVIES, GET_MOVIES_BY_CATEGORY, GET_MOVIES_BY_TITLE, setMovieListSuccess, setMovieListFailure} from "../actions/movie";
import { transformMovieListFromBack } from "../helper/helper";


const getMoviesWithoutFilterFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === GET_MOVIES_WITHOUT_FILTER){
        try{
            const movieListfromBack = await api.movie.getAll();
            const movieList = transformMovieListFromBack(movieListfromBack);
            dispatch(setMovieListSuccess(movieList));
        }catch (error){
            dispatch(setMovieListFailure(error.message));
        }
    }
}

const getMoviesByTitleFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === GET_MOVIES_BY_TITLE){
        try{
            const title = action.payload.title;
            const movieListfromBack = await api.movie.getByTitle(title);
            const movieList = transformMovieListFromBack(movieListfromBack);
            dispatch(setMovieListSuccess(movieList));
        }catch (error){
            dispatch(setMovieListFailure(error.message));
        }
    }
}

const getMoviesByCategoryFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === GET_MOVIES_BY_CATEGORY){
        try{
            const category = action.payload.category;
            const movieListfromBack = await api.movie.getByCategory(category);
            const movieList = transformMovieListFromBack(movieListfromBack);
            dispatch(setMovieListSuccess(movieList));
        }catch (error){
            dispatch(setMovieListFailure(error.message));
        }
    }
}

export default [
    getMoviesWithoutFilterFlow,
    getMoviesByTitleFlow,
    getMoviesByCategoryFlow,
    getFavoriteMoviesFlow
]