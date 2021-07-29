import {LOGIN_USER, LOGOUT_USER, loginUserFailure, loginUserSuccess, logoutSuccess} from "../actions/user";

const loginUserFlow = ({firebase, api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === LOGIN_USER){
        try{
            await firebase.user.authUserWithGoogle()
            const userEmail = await firebase.user.getUser().userEmail;
            const userName = await firebase.user.getUser().userName;
            const userImage = await firebase.user.getUser().userImage;
            const UserToBack = {
                userEmail: userEmail,
                userName: userName,
                userImage: userImage 
            }
            const user = await api.user.getUser(UserToBack);
            const userId = user.userId;
            localStorage.setItem('userId', userId);
            dispatch(loginUserSuccess(userId));
        }catch (error){
            dispatch(loginUserFailure(error.message));
        }
    }
}

/*const logoutUserFlow = ({firebase}) => ({dispatch}) => next => async (action) => { //SERGIO
    next(action);
    if(action.type === LOGOUT_USER){
        try{
            await firebase.user.logout()
            localStorage.removeItem('userId');
            dispatch(logoutSuccess(null));
        }catch (error){
            console.log(error)
        }
    }
}*/

export default [
    loginUserFlow,
    logoutUserFlow
]