import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['Home', 'SignIn'],
    blacklist: [],
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, reducer)

const enhancer = compose(applyMiddleware(thunk));
const enhancer2 = applyMiddleware(sagaMiddleware)

const store = createStore(persistedReducer, enhancer2);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

export {
    store,
    persistor
  };