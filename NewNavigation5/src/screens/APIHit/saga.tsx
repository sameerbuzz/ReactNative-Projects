import { put, takeEvery } from "redux-saga/effects";
import { HIT_API, LOADING_API } from '../../modules/SignIn/Type'
import axios from 'axios';

function* hitApi(action: any) {  
    try {
        let userData
        yield axios.get(action.payload.data).then(response => {
            userData = response.data.articles;
        })
        yield put({ type: HIT_API, payload: { data: action.payload.emptyRedux === false ? action.payload.array.concat(userData) : userData } })

    } catch (error) {
        console.warn(" error", error.message);
    }
}

export function* hitApiSaga() {
    yield takeEvery(LOADING_API, hitApi)
}


