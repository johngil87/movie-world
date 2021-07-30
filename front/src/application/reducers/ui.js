import * as uiActions from '../actions/ui';

const initialState = {
    loading: true
}

const reducer =  (state = initialState, action) => {
    switch (action.type) {
        case (uiActions.SET_LOADING_ON):
        case (uiActions.SET_LOADING_OFF):
            return {loading: action.payload};
        default:
            return state;
    }
}

export default reducer;