import { combineReducers } from "redux";
import ChatMainReducer from '../containers/DataBase/Reducer';
import SignIn from '../modules/Chat/SignIn/Reducer';
import ChatList from '../modules/Chat/ChatList/Reducer';


const reducer = combineReducers({
    ChatMainReducer,
    SignIn,
    ChatList,
});

export default reducer;