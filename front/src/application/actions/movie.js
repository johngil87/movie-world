export const GET_MOVIES_WITHOUT_FILTER = 'GET_MOVIES_WITHOUT_FILTER';
export const SET_MOVIE_LIST = 'SET_MOVIE_LIST';
export const SET_MOVIE_LIST_SUCCESS = 'SET_MOVIE_LIST_SUCCESS';
export const SET_MOVIE_LIST_FAILURE = 'SET_MOVIE_LIST_FAILURE';


export const getMoviesWithoutFilter = () => ({
    type: GET_MOVIES_WITHOUT_FILTER,
});

export const setMovieListSuccess = movieList => ({
    type: SET_MOVIE_LIST_SUCCESS,
    payload: movieList
});

export const setMovieListFailure = error => ({
    type: SET_MOVIE_LIST_FAILURE,
    payload: error
});