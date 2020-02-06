import { SHOW_FOOTER, MULTI_PICS, REMOVE_PICS, CLEAR_BUFFER, HIDE_FOOTER, CURRENT_IMAGE, URL_IMAGE } from './Type'
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

export const uploadAndSend = (roomID: string, userID: string, ref: any) => {

    return (dispatch: any, getState: any) => {
        const { images } = getState().Main;
        images.map((obj: any) => {
            if (obj.roomID === roomID && obj.userID === userID) {
                dispatch({ type: SHOW_FOOTER, payload: { data: true } });
                FirebaseServices.uploadMsgPic(obj.img, (url: string, name: string) => {
                    console.warn('url ', url)
                    // ref.onSend({ text: '' }, true), removeImagesFromBuffer(() => { })
                    uploadImage(dispatch, url, ref)
                });
            }
        })



        // dispatch({ type: CURRENT_IMAGE, payload: { data: image } });
        // if(callback){
        //     callback()
        // }
    }
}

const uploadImage = (dispatch: any, url: string, ref: any) => {
    console.warn('okkk');
    dispatch({ type: URL_IMAGE, payload: {data: url} });
    console.warn('done');
    ref.onSend({ text: '' }, true), removeImagesFromBuffer(() => { })

    // this.setState({
    //   sendingSource: url
    // }, () => {
    //   this.props.hideFooter()
    //   this.setState({ showFooter: false })
    //   this.giftedChatRef.onSend({ text: '' }, true), this.props.removeImagesFromBuffer(() => { })
    // }
    // )
}