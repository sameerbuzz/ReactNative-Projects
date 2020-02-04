import { SHOW_FOOTER, MULTI_PICS, REMOVE_PICS } from './Type'

export const updateFooter = () => {
    return (dispatch: any, getState: any) => {
        const {showFooter} = getState().Main;
        // console.warn('show ',showFooter)
        dispatch({ type: SHOW_FOOTER, payload: { data: !showFooter } });
    }
}
export const addImagesToBuffer = (values: Object) => {
    return (dispatch: any, getState: any) => {
        const {images} = getState().Main;
        images.push(values)
        // console.warn(length === index)
        dispatch({ type: MULTI_PICS, payload: { data: images } });
        // if (successCallBack) {
        //     length === index ? successCallBack(true) : successCallBack(false)
        // }
    }
}
export const removeImagesFromBuffer = () => {
    return (dispatch: any, getState: any) => {
        const {images} = getState().Main;
        var pics = images.slice(1)
        console.warn('removed ',images)
        dispatch({ type: REMOVE_PICS, payload: { data: pics } });
    }
}
