import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga'
import { hitApiSaga} from '../containers/HitAPI/Saga';

const sagaMiddleware = createSagaMiddleware()
const enhancer = compose(applyMiddleware(thunk));
const enhancer2 = applyMiddleware(sagaMiddleware)
const store = createStore(reducer, enhancer2);

sagaMiddleware.run(hitApiSaga);

export default store;