import { UPDATE_USER, IS_ONLINE } from './Type';
const initialState = {
    user: null,
    isOnline: false,
}

const Reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_USER:
            return { ...state, user: action.payload.data }
        case IS_ONLINE:
            return { ...state, isOnline: action.payload.data }
        default:
            return state
    }
}

export default Reducer;