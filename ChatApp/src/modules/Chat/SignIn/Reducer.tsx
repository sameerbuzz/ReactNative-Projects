import {UPDATE_EMAIL, LOGIN} from './Type';
const initialState = {
    uid: '',
    email: ''
}

const Reducer = (state = initialState, action: any) => {
    console.warn(action)
    switch (action.type) {
        case 'uid':
            return { ...state, uid: action.payload.data }
        case UPDATE_EMAIL:
            return { ...state, UPDATE_EMAIL: action.payload }
        default:
            return state
    }
}

export default Reducer;