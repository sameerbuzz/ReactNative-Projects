import { UPDATE_MARKERS, UPDATE_RECENT_SEARCH } from './Type'
const initialState = {
    modalVisible: false,
    marker: [],
    recentSearch: []
}

const Reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_MARKERS:
            return { ...state, marker: action.payload.data }
        case UPDATE_RECENT_SEARCH:
            return { ...state, recentSearch: action.payload.data }
        default:
            return state
    }
}

export default Reducer;