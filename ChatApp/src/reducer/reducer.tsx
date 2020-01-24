import { combineReducers } from "redux";
import ChatMainReducer from '../containers/DataBase/Reducer';
import SignIn from '../modules/Chat/SignIn/Reducer';
import ChatList from '../modules/Chat/ChatList/Reducer';
import Main from '../modules/Chat/Main/Reducer'


const reducer = combineReducers({
    ChatMainReducer,
    SignIn,
    ChatList,
    Main,
});

export default reducer;