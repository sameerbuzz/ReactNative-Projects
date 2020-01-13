import { combineReducers } from "redux";
import ChatMainReducer from '../containers/DataBase/Reducer';
import SignIn from '../modules/Chat/SignIn/Reducer';


const reducer = combineReducers({
    ChatMainReducer,
    SignIn,
});

export default reducer;