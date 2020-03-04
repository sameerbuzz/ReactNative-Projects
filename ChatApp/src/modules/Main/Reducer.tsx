import { SHOW_FOOTER, MULTI_PICS, REMOVE_PICS, CLEAR_BUFFER, HIDE_FOOTER, CURRENT_IMAGE, URL_IMAGE, URL_VIDEO, CURRENT_VIDEO, ADD_VIDEO } from './Type';
const initialState = {
    showFooter: false,
    images: [],
    currentImg: '',
    sendingURL: '',
    videoURL: '',
    currentVideo: '',
    sendingVideoURL: '',
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
        case URL_IMAGE:
            return { ...state, sendingURL: action.payload.data }
        case ADD_VIDEO:
            return { ...state, videoURL: action.payload.data }
        case CURRENT_VIDEO:
            return { ...state, currentVideo: action.payload.data }
        case URL_VIDEO:
            return { ...state, sendingVideoURL: action.payload.data }
        default:
            return state
    }
}

export default Reducer;