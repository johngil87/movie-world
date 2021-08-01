import * as actions from '../actions/user';
import * as uiActions from '../actions/ui';

const loginUserFlow = ({firebase, api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === actions.LOGIN_USER){
        try{
            dispatch(uiActions.setLoading(true));
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
            dispatch(actions.loginUserSuccess(id, name, image));
            dispatch(uiActions.setRedirecting(true));
            dispatch(uiActions.setLoading(false));
        }catch (error){
            dispatch(actions.loginUserFailure(error.message));
            dispatch(uiActions.setLoading(false));
        }
    }
}

const logoutUserFlow = ({firebase}) => ({dispatch}) => next => async (action) => { 
    next(action);
    if(action.type === actions.LOGOUT_USER){
        try{
            await firebase.user.logout()
            localStorage.removeItem('userId');
            dispatch(actions.logoutSuccess(null));
        }catch (error){
            console.log(error)
        }
    }
}

const updateUserFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === actions.UPDATE_USER){
        try{
            dispatch(uiActions.setLoading(true));
            const userId = action.payload.userId;
            const userName = action.payload.name;
            const userImage = action.payload.image;
            await api.user.updateUser(userId, userName, userImage);
            localStorage.setItem('userId', userId);
            localStorage.setItem('userName', userName);
            localStorage.setItem('userImage', userImage);
            dispatch(actions.updateUserSuccess(userName, userImage));
            dispatch(uiActions.setLoading(false));
        }catch (error){
            dispatch(actions.updateUserFailure(error.message));
            dispatch(uiActions.setLoading(false));
        }
    }
}

export default [
    loginUserFlow,
    logoutUserFlow,
    updateUserFlow
]