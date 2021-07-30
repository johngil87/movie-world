export const SET_LOADING_ON = 'SET_LOADING_ON';
export const SET_LOADING_OFF = 'SET_LOADING_OFF';

export const setLoading = isLoading => ({
    type: isLoading ? SET_LOADING_ON : SET_LOADING_OFF,
    payload: isLoading
});