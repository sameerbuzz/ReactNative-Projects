import { SHOW_FOOTER, MULTI_PICS, REMOVE_PICS, CLEAR_BUFFER, HIDE_FOOTER, CURRENT_IMAGE } from './Type';
const initialState = {
    showFooter: false,
    images: [],
    currentImg: '',
}

const Reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SHOW_FOOTER:
            return { ...state, showFooter: action.payload.data }
        case HIDE_FOOTER:
            return { ...state, showFooter: action.payload.data }
        case MULTI_PICS:
            return { ...state, images: action.payload.data }
        case REMOVE_PICS:
            return { ...state, images: action.payload.data }
        case CLEAR_BUFFER:
            return { ...state, images: action.payload.data }
        case CURRENT_IMAGE:
            return { ...state, currentImg: action.payload.data }
        default:
            return state
    }
}

export default Reducer;