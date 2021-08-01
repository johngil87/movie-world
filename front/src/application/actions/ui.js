export const SET_LOADING_ON = 'SET_LOADING_ON';
export const SET_LOADING_OFF = 'SET_LOADING_OFF';
export const SET_REDIRECT_LOGIN_ON= 'SET_REDIRECT_ON';
export const SET_REDIRECT_LOGIN_OFF = 'SET_REDIRECT_OFF';

export const setLoading = isLoading => ({
    type: isLoading ? SET_LOADING_ON : SET_LOADING_OFF,
    payload: isLoading
});

export const setRedirecting = isRedirecting => ({
    type: isRedirecting ? SET_REDIRECT_LOGIN_ON : SET_REDIRECT_LOGIN_OFF,
    payload: isRedirecting
});