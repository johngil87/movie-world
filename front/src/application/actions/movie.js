export const GET_MOVIES_WITHOUT_FILTER = 'GET_MOVIES_WITHOUT_FILTER';
export const GET_MOVIES_BY_TITLE= 'GET_MOVIES_BY_TITLE';
export const GET_MOVIES_BY_CATEGORY = 'GET_MOVIES_BY_CATEGORY';
export const GET_FAVORITE_MOVIES = 'GET_FAVORITE_MOVIES';
export const SET_MOVIE_LIST = 'SET_MOVIE_LIST';
export const SET_MOVIE_LIST_SUCCESS = 'SET_MOVIE_LIST_SUCCESS';
export const SET_MOVIE_LIST_FAILURE = 'SET_MOVIE_LIST_FAILURE';


export const getMoviesWithoutFilter = () => ({
    type: GET_MOVIES_WITHOUT_FILTER,
});

export const getMoviesByTitle = (title) => ({
    type: GET_MOVIES_BY_TITLE,
    payload: title
});

export const getMoviesByCategory = (category) => ({
    type: GET_MOVIES_BY_CATEGORY,
    payload: category
});

export const getFavoriteMovies = userId => ({
    type: GET_FAVORITE_MOVIES,
    payload: userId
});

export const setMovieListSuccess = movieList => ({
    type: SET_MOVIE_LIST_SUCCESS,
    payload: movieList
});

export const setMovieListFailure = error => ({
    type: SET_MOVIE_LIST_FAILURE,
    payload: error
});