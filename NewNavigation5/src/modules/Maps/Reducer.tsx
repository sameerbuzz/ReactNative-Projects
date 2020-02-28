import { UPDATE_MARKERS } from './Type'
const initialState = {
    modalVisible: false,
    marker: []
}

const Reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_MARKERS:
            return { ...state, marker: action.payload.data }
        default:
            return state
    }
}

export default Reducer;