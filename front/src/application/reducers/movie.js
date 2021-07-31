import * as actions from '../actions/movie';

const initialState = {
    movies: [],
    topMovies: [],
    votedMovies: [],
    error: null,
    currentMovie: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_MOVIE_LIST_SUCCESS:
            return { ...state, movies: action.payload, error: null };
        case actions.SET_MOVIE_LIST_FAILURE:
            return { ...state, movies: null, error: action.payload };
        case actions.SET_TOP_MOVIE_LIST_SUCCESS:
            return { ...state, topMovies: action.payload, error: null };
        case actions.SET_TOP_MOVIE_LIST_FAILURE:
            return { ...state, topMovies: null, error: action.payload };
        case actions.DELETE_FAVORITE_MOVIE_FAILURE:
            return { ...state, error: action.payload };
        case actions.SET_CURRENT_MOVIE_SUCCESS:
            return { ...state, error: null, currentMovie: action.payload };
        case actions.SET_CURRENT_MOVIE_FAILURE:
            return { ...state, error: action.payload, currentMovie: null };
        case actions.SET_VOTED_MOVIES_SUCCESS:
            return { ...state, error: null, votedMovies: action.payload };
        case actions.SET_VOTED_MOVIES_FAILURE:
            return { ...state, error: action.payload, votedMovies: null };
        case actions.ADD_FAVORITE_MOVIE_FAILURE:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}

export default reducer;