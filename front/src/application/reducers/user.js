import {LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE} from "../actions/user";

const initialState = {
    userUid: localStorage.getItem('userId'),
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return { userId: action.payload, error: null };
        case LOGIN_USER_FAILURE:
            return { userId: null, error: action.payload };
        default:
            return state;
    }
}

export default reducer;