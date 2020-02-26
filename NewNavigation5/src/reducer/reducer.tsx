import { combineReducers } from "redux";
import Home from '../modules/Home/Reducer'
import SignIn from '../modules/SignIn/Reducer'
import APIHit from '../modules/APIHit/Reducer';

const reducer = combineReducers({
    Home,
    SignIn,
    APIHit
});

export default reducer;