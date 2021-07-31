export const GET_MOVIES_WITHOUT_FILTER = 'GET_MOVIES_WITHOUT_FILTER';
export const GET_MOVIES_BY_TITLE= 'GET_MOVIES_BY_TITLE';
export const GET_MOVIES_BY_CATEGORY = 'GET_MOVIES_BY_CATEGORY';
export const GET_TOP_MOVIES = 'GET_TOP_MOVIES';
export const GET_FAVORITE_MOVIES = 'GET_FAVORITE_MOVIES';
export const SET_MOVIE_LIST = 'SET_MOVIE_LIST';
export const SET_MOVIE_LIST_SUCCESS = 'SET_MOVIE_LIST_SUCCESS';
export const SET_MOVIE_LIST_FAILURE = 'SET_MOVIE_LIST_FAILURE';
export const SET_TOP_MOVIE_LIST_SUCCESS = 'SET_TOP_MOVIE_LIST_SUCCESS';
export const SET_TOP_MOVIE_LIST_FAILURE = 'SET_TOP_MOVIE_LIST_FAILURE';
export const DELETE_FAVORITE_MOVIE = 'DELETE_FAVORITE_MOVIE';
export const DELETE_FAVORITE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS';
export const DELETE_FAVORITE_MOVIE_FAILURE = 'DELETE_MOVIE_FAILURE';
export const ADD_FAVORITE_MOVIE = 'ADD_FAVORITE_MOVIE';
export const GET_CURRENT_MOVIE = 'GET_CURRENT_MOVIE';
export const SET_CURRENT_MOVIE_SUCCESS = 'SET_CURRENT_MOVIE_SUCCESS';
export const SET_CURRENT_MOVIE_FAILURE = 'SET_CURRENT_MOVIE_FAILURE';
export const GET_VOTED_MOVIES = 'GET_VOTED_MOVIES';
export const SET_VOTED_MOVIES_SUCCESS = 'SET_VOTED_MOVIES_SUCCESS';
export const SET_VOTED_MOVIES_FAILURE = 'SET_VOTED_MOVIES_FAILURE';
export const ADD_FAVORITE_MOVIE_SUCCESS = 'ADD_MOVIE_SUCCESS';
export const ADD_FAVORITE_MOVIE_FAILURE = 'ADD_MOVIE_FAILURE';
export const GET_CURRENT_MOVIE = 'GET_CURRENT_MOVIE';

export const getMoviesWithoutFilter = () => ({
    type: GET_MOVIES_WITHOUT_FILTER,
});

export const getTopMovies = () => ({
    type: GET_TOP_MOVIES,
});

export const getMoviesByTitle = (title) => ({
    type: GET_MOVIES_BY_TITLE,
    payload: title
});

export const getMoviesByCategory = (category) => ({
    type: GET_MOVIES_BY_CATEGORY,
    payload: category
});

export const getFavoriteMovies = (userId, isOnlyFavoritesCase) => ({
    type: GET_FAVORITE_MOVIES,
    payload: {isOnlyFavoritesCase:isOnlyFavoritesCase, userId: userId}
});

export const setMovieListSuccess = movieList => ({
    type: SET_MOVIE_LIST_SUCCESS,
    payload: movieList
});

export const setMovieListFailure = error => ({
    type: SET_MOVIE_LIST_FAILURE,
    payload: error
});

export const setTopMovieListSuccess = movieList => ({
    type: SET_TOP_MOVIE_LIST_SUCCESS,
    payload: movieList
});

export const setTopMovieListFailure = error => ({
    type: SET_TOP_MOVIE_LIST_FAILURE,
    payload: error
});

export const deleteFavoriteMovie = (userId, movieId) => ({
    type: DELETE_FAVORITE_MOVIE,
    payload: {userId: userId, movieId: movieId}
});

export const deleteFavoriteMovieSuccess = () => ({
    type: DELETE_FAVORITE_MOVIE_SUCCESS
});

export const deleteFavoriteMovieFailure = error => ({
    type: DELETE_FAVORITE_MOVIE_FAILURE,
    payload: error
});

export const getCurrentMovie = (movieId) => ({
    type: GET_CURRENT_MOVIE,
    payload: movieId
});

export const setCurrentMovieSuccess = movie => ({
    type: SET_CURRENT_MOVIE_SUCCESS,
    payload: movie
});

export const setCurrentMovieFailure = error => ({
    type: SET_CURRENT_MOVIE_FAILURE,
    payload: error
});

export const getVotedMovies = userId => ({
    type: GET_VOTED_MOVIES,
    payload: userId
});

export const setVotedMovieSuccess = movieList => ({
    type: SET_VOTED_MOVIES_SUCCESS,
    payload: movieList
});

export const setVotedMovieFailure = error => ({
    type: SET_VOTED_MOVIES_FAILURE,
    payload: error
});

export const addFavoriteMovie = (userId, movieId) => ({
    type: ADD_FAVORITE_MOVIE,
    payload: {userId: userId, movieId: movieId}
});

export const addFavoriteMovieSuccess = () => ({
    type: ADD_FAVORITE_MOVIE_SUCCESS
});

export const addFavoriteMovieFailure = error => ({
    type: ADD_FAVORITE_MOVIE_FAILURE,
    payload: error
});
