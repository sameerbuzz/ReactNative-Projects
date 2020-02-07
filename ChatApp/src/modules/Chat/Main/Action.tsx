import { SHOW_FOOTER, MULTI_PICS, REMOVE_PICS, CLEAR_BUFFER, HIDE_FOOTER, CURRENT_IMAGE, URL_IMAGE, URL_VIDEO, CURRENT_VIDEO, ADD_VIDEO } from './Type'
import FirebaseServices from '../../../utils/FirebaseServices';

export const showingFooter = () => {
    return (dispatch: any) => {
        // console.warn('footer  ',true)
        dispatch({ type: SHOW_FOOTER, payload: { data: true } });
    }
}

export const hideFooter = () => {
    return (dispatch: any) => {
        // console.warn(false)
        dispatch({ type: HIDE_FOOTER, payload: { data: false } });
    }
}

export const addImagesToBuffer = (values: Object) => {
    return (dispatch: any, getState: any) => {
        const { images } = getState().Main;
        images.push(values)
        dispatch({ type: MULTI_PICS, payload: { data: images } });
    }
}

export const addVideo = (values: Object) => {
    return (dispatch: any) => {
        dispatch({ type: ADD_VIDEO, payload: { data: values } });
    }
}

export const clearImageBuffer = () => {
    return (dispatch: any) => {
        dispatch({ type: CLEAR_BUFFER, payload: { data: [] } });
    }
}

export const removeImagesFromBuffer = (callback: Function) => {
    return (dispatch: any, getState: any) => {
        const { images } = getState().Main;
        images.splice(1)
        dispatch({ type: REMOVE_PICS, payload: { data: images } });
        dispatch({ type: URL_IMAGE, payload: { data: '' } });
        if (callback) {
            callback()
        }
    }
}

export const changeCurrentImage = (image: string, callback: Function) => {
    return (dispatch: any) => {
        dispatch({ type: CURRENT_IMAGE, payload: { data: image } });
        callback()
    }
}

export const uploadAndSend = (roomID: string, userID: string, ref: any, callback: Function) => {

    return (dispatch: any, getState: any) => {
        const { images } = getState().Main;
        images.map((obj: any) => {
            if (obj.roomID === roomID && obj.userID === userID) {
                dispatch({ type: CURRENT_IMAGE, payload: { data: obj.img } });
                FirebaseServices.uploadMsgPic(obj.img, (url: string, name: string) => {
                    dispatch({ type: URL_IMAGE, payload: { data: url } });
                    ref.onSend({ text: '' }, true)
                    callback()
                });
            }
        })
    }
}

export const uploadAndSendVideo = (roomID: string, userID: string, ref: any, callback: Function) => {

    return (dispatch: any, getState: any) => {
        const { videoURL } = getState().Main;
        if (videoURL.roomID === roomID && videoURL.userID === userID) {
            dispatch({ type: CURRENT_VIDEO, payload: { data: videoURL.video } });
            FirebaseServices.uploadMsgVideo(videoURL.video, (url: string, name: string) => {
                dispatch({ type: URL_VIDEO, payload: { data: url } });
                ref.onSend({ text: '' }, true)
                callback()
            });
        }

    }
}

export const removeVideo = (callback: Function) => {
    return (dispatch: any) => {
        dispatch({ type: URL_VIDEO, payload: { data: '' } });
        dispatch({ type: ADD_VIDEO, payload: { data: '' } });
        if(callback){
            callback()
        }
    }
}
