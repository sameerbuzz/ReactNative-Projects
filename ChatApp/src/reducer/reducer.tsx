import { combineReducers } from "redux";
import ChatMainReducer from '../containers/DataBase/Reducer';
import SignIn from '../modules/Chat/SignIn/Reducer';
import ChatList from '../modules/Chat/ChatList/Reducer';
import Main from '../modules/Chat/Main/Reducer'
import Nav from '../containers/Animation/Reducer'


const reducer = combineReducers({
    ChatMainReducer,
    SignIn,
    ChatList,
    Main,
    Nav,
});

export default reducer;