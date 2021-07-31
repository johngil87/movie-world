export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'; 
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

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

export const updateUser = (userId, name, image) => ({
    type: UPDATE_USER,
    payload: {userId: userId, name: name, image: image}
});

export const updateUserSuccess = (name, image) => ({
    type: UPDATE_USER_SUCCESS,
    payload: {name: name, image: image}
});

export const updateUserFailure = error => ({
    type: UPDATE_USER_FAILURE,
    payload: error
});