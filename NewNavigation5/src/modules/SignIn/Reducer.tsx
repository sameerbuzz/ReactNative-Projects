import { UPDATE_TOKEN, HIT_API, LOADING_API } from './Type'
const initialState = {
    token: '',
    newsArray: [],
    isloading: false,
    isrefreshing: false
}

const Reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_TOKEN:
            return { ...state, token: action.payload.data }
        default:
            return state
    }
}

export default Reducer;