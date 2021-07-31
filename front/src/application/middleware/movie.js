import * as movieActions from '../actions/movie';
import * as uiActions from '../actions/ui';
import { transformMovieListFromBack, transformMovieFromBack } from "./helper/helper";


const getMoviesWithoutFilterFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === movieActions.GET_MOVIES_WITHOUT_FILTER){
        try{
            dispatch(uiActions.setLoading(true));
            const movieListfromBack = await api.movie.getAll();
            const movieList = transformMovieListFromBack(movieListfromBack);
            dispatch(movieActions.setMovieListSuccess(movieList));
            dispatch(uiActions.setLoading(false));
        }catch (error){
            dispatch(movieActions.setMovieListFailure(error.message));
            dispatch(uiActions.setLoading(false));
        }
    }
}

const getTopMoviesFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === movieActions.GET_TOP_MOVIES){
        try{
            dispatch(uiActions.setLoading(true));
            const movieListfromBack = await api.movie.getTop();
            const movieList = transformMovieListFromBack(movieListfromBack);
            dispatch(movieActions.setTopMovieListSuccess(movieList));
            dispatch(uiActions.setLoading(false));
        }catch (error){
            dispatch(movieActions.setTopMovieListFailure(error.message));
            dispatch(uiActions.setLoading(false));
        }
    }
}

const getMoviesByTitleFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === movieActions.GET_MOVIES_BY_TITLE){
        try{
            dispatch(uiActions.setLoading(true));
            const title = action.payload;
            const movieListfromBack = await api.movie.getByTitle(title);
            if(Array.isArray(movieListfromBack)){
                const movieList = transformMovieListFromBack(movieListfromBack);
                dispatch(movieActions.setMovieListSuccess(movieList));
            }else{
                dispatch(movieActions.setMovieListFailure(movieListfromBack));
            }
            dispatch(uiActions.setLoading(false));
        }catch (error){
            dispatch(movieActions.setMovieListFailure(error.message));
            dispatch(uiActions.setLoading(false));
        }
    }
}

const getMoviesByCategoryFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === movieActions.GET_MOVIES_BY_CATEGORY){
        try{
            dispatch(uiActions.setLoading(true));
            const category = action.payload;
            const movieListfromBack = await api.movie.getByCategory(category);
            const movieList = transformMovieListFromBack(movieListfromBack);
            dispatch(movieActions.setMovieListSuccess(movieList));
            dispatch(uiActions.setLoading(false));
        }catch (error){
            dispatch(movieActions.setMovieListFailure(error.message));
            dispatch(uiActions.setLoading(false));
        }
    }
}

const getFavoriteMoviesFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === movieActions.GET_FAVORITE_MOVIES){
        try{
            dispatch(uiActions.setLoading(true));
            const userId = action.payload.userId
            const movieListfromBack = await api.movie.getFavorites(userId);
            const movieList = transformMovieListFromBack(movieListfromBack);
            dispatch(movieActions.setMovieListSuccess(movieList));
            if(action.payload.isOnlyFavoritesCase){
                dispatch(uiActions.setLoading(false));
            }
        }catch (error){
            dispatch(movieActions.setMovieListFailure(error.message));
            dispatch(uiActions.setLoading(false));
        }
    }
}

const deleteFavoriteMovieFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === movieActions.DELETE_FAVORITE_MOVIE){
        try{
            dispatch(uiActions.setLoading(true));
            const userId = action.payload.userId;
            const movieId = action.payload.movieId;
            await api.movie.deleteFavorite(userId, movieId);
            dispatch(movieActions.deleteFavoriteMovieSuccess());
            dispatch(uiActions.setLoading(false));
        }catch (error){
            dispatch(movieActions.deleteFavoriteMovieFailure(error.message));
            dispatch(uiActions.setLoading(false));
        }
    }
}

const getCurrentMovieFlow = ({api}) => ({dispatch, getState}) => next => async (action) => {
    next(action);
    if(action.type === movieActions.GET_CURRENT_MOVIE){
        try{
            dispatch(uiActions.setLoading(true));
            const movieId = action.payload;
            const moviefromBack = await api.movie.getMovie(movieId);
            const movie = transformMovieFromBack(moviefromBack);
            const favoriteList = getState().movie.movies.filter(movie => movie.id === movieId);
            const votedList = getState().movie.votedMovies.filter(movie => movie.id === movieId); //cambiar movie por id y ya no se usa movie.id
            if(favoriteList.length === 1){
                movie.isFavorite = true;
            } else{
                movie.isFavorite = false;
            }

            if(votedList.length === 1){
                movie.isVoted = true;
            } else{
                movie.isVoted = false;
            }

            dispatch(movieActions.setCurrentMovieSuccess(movie));
            dispatch(uiActions.setLoading(false));
        }catch (error){
            dispatch(movieActions.setCurrentMovieFailure(error.message));
            dispatch(uiActions.setLoading(false));
        }
    }
}

const getVotedMoviesFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === movieActions.GET_VOTED_MOVIES){
        try{
            dispatch(uiActions.setLoading(true));
            const userId = action.payload
            const movieListfromBack = await api.movie.getVoted(userId);
            const movieList = transformMovieListFromBack(movieListfromBack);//no necesario creo
            dispatch(movieActions.setVotedMovieSuccess(movieList));
        }catch (error){
            dispatch(movieActions.setVotedMovieFailure(error.message));
            dispatch(uiActions.setLoading(false));
        }
    }
}

const addFavoriteMovieFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === movieActions.ADD_FAVORITE_MOVIE){
        try{
            dispatch(uiActions.setLoading(true));
            const userId = action.payload.userId;
            const movieId = action.payload.movieId;
            await api.movie.addFavorite(userId, movieId);
            dispatch(movieActions.addFavoriteMovieSuccess());
            dispatch(uiActions.setLoading(false));
        }catch (error){
            dispatch(movieActions.addFavoriteMovieFailure(error.message));
            dispatch(uiActions.setLoading(false));
        }
    }
}

const voteMovieFlow = ({api}) => ({dispatch}) => next => async (action) => { 
    next(action);
    if(action.type === movieActions.VOTE_MOVIE){
        try{
            dispatch(uiActions.setLoading(true));
            const userId = action.payload.userId;
            const movieId = action.payload.movieId;
            const score = action.payload.score;
            await api.movie.vote(userId, movieId, score);
            dispatch(movieActions.voteMovieSuccess);
            dispatch(uiActions.setLoading(false));
        }catch (error){
            dispatch(movieActions.voteMovieFailure(error.message));
            dispatch(uiActions.setLoading(false));
        }
    }
}

export default [
    getMoviesWithoutFilterFlow,
    getTopMoviesFlow,
    getMoviesByTitleFlow,
    getMoviesByCategoryFlow,
    getFavoriteMoviesFlow,
    deleteFavoriteMovieFlow,
    addFavoriteMovieFlow,
    getCurrentMovieFlow,
    getVotedMoviesFlow
]