import {LOGIN_USER, loginUserFailure, loginUserSuccess} from "../actions/user";

const loginUserFlow = ({firebase, api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === LOGIN_USER){
        try{
            await firebase.user.authUserWithGoogle()
            const userEmail = await firebase.user.getUser().userEmail;
            const user = await api.user.getUser();
            const userId = user.userId;
            localStorage.setItem('userId', userId);
            dispatch(loginUserSuccess(userId));
        }catch (error){
            dispatch(loginUserFailure(error.message));
        }
    }
}

export default [
    loginUserFlow,
]