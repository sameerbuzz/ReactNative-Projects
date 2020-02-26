import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import axios from 'axios';
function* hitApi(action: any) {
    try {
        let userData
        yield axios.get(action.payload.endpoint).then(response => {
             userData = response.data.articles;
            console.warn(userData);
        })
        yield put({
            type: "HIT_API_ASYNC", payload: {
                data: userData,
            }
        })
    } catch (error) {
        console.warn(" error a gaya");

    }

}

function* hitApiSaga() {
    yield console.warn("in saga");
    yield takeEvery("HIT_API", hitApi)
}
export { hitApiSaga };