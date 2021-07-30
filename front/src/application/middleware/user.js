import {LOGIN_USER, LOGOUT_USER, loginUserFailure, loginUserSuccess, logoutSuccess} from "../actions/user";

const loginUserFlow = ({firebase, api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === LOGIN_USER){
        try{
            await firebase.user.authUserWithGoogle()
            const userEmail = await firebase.user.getUser().userEmail;
            const userName = await firebase.user.getUser().userName;
            const userImage = await firebase.user.getUser().userImage;
            const userToBack = {
                userEmail: userEmail,
                userName: userName,
                userImage: userImage 
            }
            const user = await api.user.getUser(userToBack);
            const id = user.id;
            const name = user.userName.value;
            const image = user.userImage.value;
            localStorage.setItem('userId', id);
            localStorage.setItem('userName', name);
            localStorage.setItem('userImage', image);
            dispatch(loginUserSuccess(id, name, image));
        }catch (error){
            dispatch(loginUserFailure(error.message));
        }
    }
}

export default [
    loginUserFlow,
    logoutUserFlow
]