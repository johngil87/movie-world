export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const loginUser = () => ({
    type: LOGIN_USER
});

export const loginUserSuccess = userId => ({
    type: LOGIN_USER_SUCCESS,
    payload: userId
});

export const loginUserFailure = error => ({
    type: LOGIN_USER_FAILURE,
    payload: error
});