import { SET_MOVIE_LIST_FAILURE, SET_MOVIE_LIST_SUCCESS, SET_MOVIE_LIST} from "../actions/movie";

const initialState = {
    movies: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE_LIST_SUCCESS:
            return { movies: action.payload, error: null };
        case SET_MOVIE_LIST_FAILURE:
            return { movies: null, error: action.payload };
        default:
            return state;
    }
}

export default reducer;