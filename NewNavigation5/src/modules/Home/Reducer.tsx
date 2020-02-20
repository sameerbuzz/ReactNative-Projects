import { UPDATE_UID, UPDATE_EMAIL, UPDATE_PASSWORD } from './Type'
const initialState = {
    uid: '',
    email: '',
    password: '',
    token: '',
}

const Reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_UID:
            return { ...state, uid: action.payload.data }
        case UPDATE_EMAIL:
            return { ...state, email: action.payload.data }
        case UPDATE_PASSWORD:
            return { ...state, password: action.payload.data }
        default:
            return state
    }
}

export default Reducer;