import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['Home', 'SignIn'],
    blacklist: [],
}
const persistedReducer = persistReducer(persistConfig, reducer)

const enhancer = compose(applyMiddleware(thunk));
const store = createStore(persistedReducer, enhancer);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

export {
    store,
    persistor
  };