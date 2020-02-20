import { UPDATE_TOKEN } from './Type'
const initialState = {
    token: '',
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