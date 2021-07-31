export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const loginUser = () => ({
    type: LOGIN_USER
});

export const loginUserSuccess = (userId, userName, userImage) => ({
    type: LOGIN_USER_SUCCESS,
    payload: {userId: userId, userName: userName, userImage: userImage}
});

export const loginUserFailure = error => ({
    type: LOGIN_USER_FAILURE,
    payload: error
});

export const logoutUser = () => ({ 
    type: LOGOUT_USER 
});

export const logoutSuccess = (userId) => ({
    type: LOGOUT_SUCCESS,
    payload: userId
});