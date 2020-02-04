import { SHOW_FOOTER, MULTI_PICS, REMOVE_PICS } from './Type';
const initialState = {
    showFooter: false,
    images: []
}

const Reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SHOW_FOOTER:
            return { ...state, showFooter: action.payload.data }
        case MULTI_PICS || REMOVE_PICS:
            return { ...state, images: action.payload.data }
        default:
            return state
    }
}

export default Reducer;