import {LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_SUCCESS, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE} from "../actions/user";

const initialState = {
    userId: localStorage.getItem('userId'),
    userName: localStorage.getItem('userName'), 
    userImage: localStorage.getItem('userImage'),
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {userId: action.payload.userId, userName: action.payload.userName, userImage: action.payload.userImage , error: null };
        case LOGIN_USER_FAILURE:
            return { userId: null, userName: null, userImage: null, error: action.payload };
        case LOGOUT_SUCCESS: 
            return { userId: null, userName: null, userImage: null, error: null };
        case UPDATE_USER_SUCCESS:
            return {...state, userImage: action.payload.image, userName: action.payload.name}
        case UPDATE_USER_FAILURE:
            return {...state, error: action.payload };
        default:
            return state;
    }
}

export default reducer;