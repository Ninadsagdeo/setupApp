import {combineReducers} from 'redux';
import loginReducer from './Login/LoginReducer';

export default (rootReducer = combineReducers({
    login:loginReducer
}));