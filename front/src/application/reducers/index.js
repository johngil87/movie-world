import { combineReducers } from 'redux';
import user from './user';
import movie from './movie';
import ui from './ui';


export default combineReducers({
    user,
    movie,
    ui
})