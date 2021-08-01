import * as uiActions from '../actions/ui';

const initialState = {
    loading: true,
    redirecting: false
}

const reducer =  (state = initialState, action) => {
    switch (action.type) {
        case (uiActions.SET_REDIRECT_LOGIN_ON):
        case (uiActions.SET_REDIRECT_LOGIN_OFF):
            return {...state, redirecting: action.payload};
        case (uiActions.SET_LOADING_ON):
        case (uiActions.SET_LOADING_OFF):
            return {...state, loading: action.payload};
        default:
            return state;
    }
}

export default reducer;