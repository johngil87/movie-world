import * as actions from '../actions/movie';

const initialState = {
    movies: [],
    topMovies: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_MOVIE_LIST_SUCCESS:
            return { movies: action.payload, topMovies:state.topMovies, error: null };
        case actions.SET_MOVIE_LIST_FAILURE:
            return { movies: null, topMovies:state.topMovies, error: action.payload };
        case actions.SET_TOP_MOVIE_LIST_SUCCESS:
            return { movies: state.movies, topMovies: action.payload, error: null };
        case actions.SET_TOP_MOVIE_LIST_FAILURE:
            return { movies: state.movies, topMovies:null, error: action.payload };
        case actions.DELETE_FAVORITE_MOVIE_FAILURE:
            return { movies: state.movies, topMovies:state.topMovies, error: action.payload };
        default:
            return state;
    }
}

export default reducer;