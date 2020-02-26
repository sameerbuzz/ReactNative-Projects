import { HIT_API, LOADING_API } from './Type'
const initialState = {
    newsArray: [],
    isloading: false,
    isrefreshing: false
}

const Reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case HIT_API:
            return { ...state, newsArray: action.payload.data, isloading: false }
        case LOADING_API:
            return { ...state, isloading: true }
        default:
            return state
    }
}

export default Reducer;