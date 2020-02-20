import { combineReducers } from "redux";
import Home from '../modules/Home/Reducer'
import SignIn from '../modules/SignIn/Reducer'

const reducer = combineReducers({
    Home,
    SignIn
});

export default reducer;