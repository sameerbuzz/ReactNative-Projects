import { combineReducers } from "redux";
import ChatMainReducer from '../containers/DataBase/Reducer';
import SignIn from '../modules/SignIn/Reducer';
import ChatList from '../modules/ChatList/Reducer';
import Main from '../modules/Main/Reducer'
import Nav from '../containers/Animation/Reducer'


const reducer = combineReducers({
    ChatMainReducer,
    SignIn,
    ChatList,
    Main,
    Nav,
});

export default reducer;