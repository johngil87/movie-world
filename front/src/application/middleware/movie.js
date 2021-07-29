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

export default [
    getMoviesWithoutFilterFlow,
    getMoviesByTitleFlow,
    getMoviesByCategoryFlow,
    getFavoriteMoviesFlow
]